/**
 * Custom declaration file for Clarifai as it doesn't natively support TypeScript.
 */

declare module 'clarifai' {

    const FOOD_MODEL = 'bd367be194cf45149e75f01d59f77ba7';
    const GENERAL_MODEL = 'aaa03c23b3724a16a56b629203edc62c';
    const TRAVEL_MODEL = 'eee28c313d69466f836ab83287a54ed9';
    const NSFW_MODEL = 'e9576d86d2004ed1a38ba0cf39ecb4b1';
    const WEDDINGS_MODEL = 'c386b7a870114f4a87477c0824499348';
    const WEDDING_MODEL = 'c386b7a870114f4a87477c0824499348';
    const COLOR_MODEL = 'eeed0b6733a644cea07cf4c60f87ebb7';
    const CLUSTER_MODEL = 'cccbe437d6e54e2bb911c6aa292fb072';
    const FACE_DETECT_MODEL = 'a403429f2ddf4b49b307e318f00e528b';
    const FOCUS_MODEL = 'c2cf7cecd8a6427da375b9f35fcd2381';
    const LOGO_MODEL = 'c443119bf2ed4da98487520d01a0b1e3';
    const DEMOGRAPHICS_MODEL = 'c0c0ac362b03416da06ab3fa36fb58e3';
    const GENERAL_EMBED_MODEL = 'bbb5f41425b8468d9b7a554ff10f8581';
    const FACE_EMBED_MODEL = 'd02b4508df58432fbb84e800597b8959';
    const APPAREL_MODEL = 'e0be3b9d6a454f0493ac3a30784001ff';
    const MODERATION_MODEL = 'd16f390eb32cad478c7ae150069bd2c6';
    const TEXTURES_AND_PATTERNS = 'fbefb47f9fdb410e8ce14f24f54b47ff';
    const LANDSCAPE_QUALITY = 'bec14810deb94c40a05f1f0eb3c91403';
    const PORTRAIT_QUALITY = 'de9bd05cfdbf4534af151beb2a5d0953';
    const CELEBRITY_MODEL = 'e466caa0619f444ab97497640cefc4dc';

    class App {
        constructor(options: object);
        apiKey: string;
        models?: {
            predict: (model: string, url: string) => Promise<ClarifaiResponse | Error>;
        }; 
    }

    interface ClarifaiResponse extends Response {
        rawData: {
            status: {
                code: number,
                description: string
            },
            outputs: Array< {
                id: string,
                status: {
                    code: number,
                    description: string
                },
                created_at: string,
                model: {
                    name: string,
                    id: string,
                    created_at: string,
                    app_id: void,
                    output_info: {
                        message: string,
                        type: string
                    },
                    model_version: {
                        id: string,
                        created_at: string,
                        status: {
                            code: number,
                            description: string
                        }
                    }
                },
                input: {
                    id: string,
                    data: {
                        image: {
                            url: string
                        }
                    }
                },
                data: {
                    regions: Array< {
                        region_info: {
                            bounding_box: {
                                top_row: number,
                                left_col: number,
                                bottom_row: number,
                                right_col: number
                            }
                        }
                    } >
                }
            } >
        }
    }
}
