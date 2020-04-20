/**
 * Custom declaration file for Clarifai as it doesn't natively support TypeScript.
 */

declare module 'clarifai' {

    class App {
        constructor(options: object);
        apiKey: string;
        models?: {
            predict: Function;
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
