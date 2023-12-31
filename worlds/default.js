// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "csmLights.js"
    ];

    Constants.DefaultCards = [
        {
            card: {
                
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],

                translation: [-1.1325594901941938, -1.6179733787035926, 5.776565191272698],
                scale: [15.716117902486776, 15.716117902486776, 15.716117902486776],
                rotation: [0, 0.999973281413003, 0, -0.007310024631348529],
                layers: ["pointer", "walk"],
                name: "/HopeForHaiti_007.glb",
                animationClipIndex: 0,
                animationStartTime: 44428,
                dataLocation: "./assets/3d/HopeForHaiti_007.glb",
                dataScale: [0.06813214899758914, 0.06813214899758914, 0.06813214899758914],
                fileName: "/HopeForHaiti_007.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                dataLocation: "./assets/sky/greenwich_park_1k.exr",
                fileName: "/abandoned_parking_4k.jpg",
                dataType: "exr",
            }
        },
    ];
}
