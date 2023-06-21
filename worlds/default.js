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
        "csmLights.js", "shoppingCart.js"
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

        // {
        //     card: {
        //             translation: [-1.4332548477256493, 0.7774404169439078, 27.637767491502668],
        //             scale: [6.7180240526439, 6.7180240526439, 6.7180240526439],
        //             rotation: [0, 0.9983881722584435, 0, -0.05675436101697372],
        //             layers: ["pointer"],
        //             name: "/Infographic_3.png",
        //             cornerRadius: 0.02,
        //             fileName: "/Infographic_3.png",
        //             fullBright: true,
        //             modelType: "img",
        //             shadow: true,
        //             singleSided: true,
        //             textureLocation: "./assets/images/Infographic_3.png",
        //             textureType: "image",
        //             type: "2d",
        //             behaviorModules: ["ShoppingCart"],
        //             price: "10.99",

        //     }
        // },

        {
            card: {
                    translation: [6.793451136389074, 0.46723267268581936, 35.8428960077706],                    //position 1
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, -0.7038448833862585, 0, 0.7103537007230863],
                    layers: ["pointer"],
                    name: "/1 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/1 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/1 Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart"],
                    price: "1.00",
            }
        },

        {
            card: {
                    translation: [-8.672792884322906, 0.46723267268581936, 36.01474373412296],                   //position 2
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, 0.7295528958614285, 0, 0.6839243906604034],
                    layers: ["pointer"],
                    behaviorModules: [],
                    name: "/16 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/16 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/16 Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart"],
                    price: "16.00",
            }
        },

        {
            card: {
                    translation: [6.793451136389074, 0.46723267268581936, 43.57788669640459],   
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, -0.7038448833862585, 0, 0.7103537007230863],
                    layers: ["pointer"],
                    name: "/30 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/30 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/30 Donate.png",
                    textureType: "image",
                    type: "2d", 
                    behaviorModules: ["ShoppingCart"],
                    price: "30.00",
            }
        },

        {
            card: {
                    translation: [-8.571166857290434, 0.46723267268581936, 43.844688067494204],
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, 0.7295528958614285, 0, 0.6839243906604034],
                    layers: ["pointer"],
                    name: "/50 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/50 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/50 Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart"],
                    price: "50.00",
            }
        },

        {
            card: {
                    translation: [7.024777620218381, 0.46723267268581936, 51.52479511357458],
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, -0.7038448833862585, 0, 0.7103537007230863],
                    layers: ["pointer"],
                    name: "/65 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/65 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/65 Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart"],
                    price: "65.00",
            }
        },

        {
            card: {
                    translation: [-8.524527905594423, 0.46723267268581936, 51.582236153058666],
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, 0.7295528958614285, 0, 0.6839243906604034],
                    layers: ["pointer"],
                    name: "/100 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/100 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/100 Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart"],
                    price: "100.00",
            
            }
        },

        {
            card: {
                    translation: [7.110901030064705, 0.46723267268581936, 59.19289998530565],
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, -0.7038448833862585, 0, 0.7103537007230863],
                    layers: ["pointer"],
                    name: "/110 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/110 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/110 Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart"],
                    price: "110.00",
            
            }
        },

        {
            card: {
                    translation: [-8.34355120937942, 0.46723267268581936, 59.436517252411626],
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, 0.7295528958614285, 0, 0.6839243906604034],
                    layers: ["pointer"],
                    name: "/400 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/400 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/400 Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart"],
                    price: "400.00",
            
            }
        },

        {
            card: {
                    translation: [7.198771372379792, 0.46723267268581936, 66.86906396641315],
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, -0.7038448833862585, 0, 0.7103537007230863],
                    layers: ["pointer"],
                    name: "/750 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/750 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/750 Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart"],
                    price: "750.00",
            }
        },

        {
            card: {
                    translation: [-8.260254349993023, 0.46723267268581936, 67.29304420580476],
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, 0.7295528958614285, 0, 0.6839243906604034],
                    layers: ["pointer"],
                    name: "/833 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/833 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/833 Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart"],
                    price: "833.00",
            }
        },

        {
            card: {
                    translation: [7.327477577301178, 0.46723267268581936, 74.64665028082086],
                    scale: [2.8369414260916415, 2.8369414260916415, 2.8369414260916415],
                    rotation: [0, -0.7038448833862585, 0, 0.7103537007230863],
                    layers: ["pointer"],
                    name: "/1000 Donate.png",
                    cornerRadius: 0.02,
                    fileName: "/1000 Donate.png",
                    fullBright: true,
                    modelType: "img",
                    shadow: true,
                    singleSided: true,
                    textureLocation: "./assets/images/1000 Donate.png",
                    textureType: "image",
                    type: "2d",
                    behaviorModules: ["ShoppingCart"],
                    price: "1000.00",
            
            }
        },
    ];
}
