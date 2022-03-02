/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Forge Partner Development
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////

(function () {
    const MODEL_URN = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZXh0cmFjdC1hdXRvZGVzay1pby0yMDE3bGt3ZWo3eHBiZ3A2M3g0aGwzMzV5Nm0yNm9ha2dnb2YvcmFjX2Jhc2ljX3NhbXBsZV9wcm9qZWN0LnJ2dA';
    const MODEL_2D_VIEWABLE_GUID = '6d3acd40-53b7-41b4-9d96-72e9eaf4bc89-0005d699';

    const options = {
        getAccessToken: async function (callback) {
            const resp = await fetch('/api/auth/token');
            if (resp.ok) {
                const token = await resp.json();
                callback(token.access_token, token.expires_in);
            } else {
                throw new Error(await resp.text());
            }
        }
    };

    Autodesk.Viewing.Initializer(options, async function () {
        const config = {
            extensions: ['IotConnectedExtension']
        };

        let viewer = new Autodesk.Viewing.GuiViewer3D(document.getElementById('viewer'), config);
        viewer.start();
        await loadModel(viewer, MODEL_URN, MODEL_2D_VIEWABLE_GUID);
    });

    async function loadModel(viewer, urn, guid) {
        return new Promise(function (resolve, reject) {
            function onDocumentLoadSuccess(doc) {
                Autodesk.Viewing.Document.getAecModelData(doc.getRoot()).then(aec => console.log('AEC metadata', aec));
                resolve(viewer.loadDocumentNode(doc, doc.getRoot().findByGuid(guid)));
            }
            function onDocumentLoadFailure(code, message) {
                console.error('Could not load document.', message);
                reject(message);
            }
            Autodesk.Viewing.Document.load('urn:' + urn, onDocumentLoadSuccess, onDocumentLoadFailure);
        });
    }
})();