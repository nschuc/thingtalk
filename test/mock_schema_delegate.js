module.exports = {
    _schema: {
        "builtin": {
            "triggers": {
                "timer": {
                    args: ["interval"],
                    types: ["Measure(ms)"],
                    required: [true],
                    is_input: [true],
                },
                "at": {
                    args: ["time"],
                    types: ["Time"],
                    required: [true],
                    is_input: [true],
                }
            },
            "queries": {
                "get_time": {
                    args: ["time"],
                    types: ["Date"],
                    required: [false],
                    is_input: [false],
                }
            },
            "actions": {
                "notify" : {
                    args: ["message"],
                    types: ["String"],
                    required: [true],
                    is_input: [true],
                },
                "debug_log": {
                    args: ["message"],
                    types: ["String"],
                    required: [true],
                    is_input: [true],
                }
            }
        },
        "security-camera": {
            "triggers": {},
            "queries": {
                "get_snapshot": {
                    args: ["picture_url"],
                    types: ["Picture"],
                    required: [false],
                    is_input: [false],
                }
            },
            "actions": {}
        },
        "youtube": {
            "triggers": {},
            "queries": {
                "search_videos": {
                    args: ["query", "video_url"],
                    types: ["String", "Entity(tt:url)"],
                    required: [true,false],
                    is_input: [true,false],
                }
            },
            "actions": {}
        },
        "phone": {
            "triggers": {
                "receive_sms": {
                    args: ["from", "body"],
                    types: ["Entity(tt:phone_number)", "String"],
                    required: [false,false],
                    is_input: [false,false],
                }
            },
            "actions": {
                "send_sms": {
                    args: ["to", "body"],
                    types: ["Entity(tt:phone_number)", "String"],
                    required: [true,true],
                    is_input: [true,true],
                }
            },
            "queries": {}
        },
        "ninegag": {
            "triggers": {},
            "actions": {},
            "queries": {
                "get_latest": {
                    args: ["arg1", "arg2", "picture_url"],
                    types: ["String", "String", "Entity(tt:picture)"],
                    required: [false,false,false],
                    is_input: [false,false,false],
                }
            }
        },
        "twitter": {
            "triggers": {
                "source": {
                    args: ["text", "hashtags", "urls", "from", "inReplyTo", "__reserved"],
                    types: ["String","Array(String)","Array(String)","String","String","Boolean"],
                    required: [false,false,false,false,false,false],
                    is_input: [false,false,false,false,false,false],
                }
            },
            "actions": {
                "sink": {
                    args: ["status"],
                    types: ["String"],
                    required: [true],
                    is_input: [true],
                },
                "post_picture": {
                    args: ["caption", "picture_url"],
                    types: ["String", "Entity(tt:picture)"],
                    required: [true,true],
                    is_input: [true,true],
                }
            },
            "queries": {}
        },
        "org.twitter": {
            "triggers": {
                "source": {
                    args: ["text", "hashtags", "urls", "from", "inReplyTo", "__reserved"],
                    types: ["String","Array(String)","Array(String)","String","String","Boolean"],
                    required: [false,false,false,false,false,false],
                    is_input: [false,false,false,false,false,false],
                }
            },
            "actions": {
                "sink": {
                    args: ["status"],
                    types: ["String"],
                    required: [true],
                    is_input: [true],
                },
                "post_picture": {
                    args: ["caption", "picture_url"],
                    types: ["String", "Entity(tt:picture)"],
                    required: [true,true],
                    is_input: [true,true],
                }
            },
            "queries": {}
        },
        "weatherapi": {
            "triggers": {
                "weather": {
                    args: ["location", "temperature"],
                    types: ["Location", "Measure(C)"],
                    required: [true,false],
                    is_input: [true,false],
                }
            },
            "actions": {},
            "queries": {}
        },
        "omlet": {
            "triggers": {
                "incomingmessage": {
                    args: ["type", "message"],
                    types: ["Enum(text,picture)", "String"],
                    required: [false,false],
                    is_input: [false,false],
                }
            },
            "actions": {},
            "queries": {}
        },
        "test": {
            "triggers": {
                "source": {
                    args: ["value"],
                    types: ["Number"],
                    required: [false],
                    is_input: [false],
                }
            },
            "actions": {},
            "queries": {}
        },
        "thermostat": {
            "triggers": {
                "temperature": {
                    args: ["time", "temperature"],
                    types: ["Date", "Measure(C)"],
                    required: [false,false],
                    is_input: [false,false],
                }
            },
            "actions": {
                "set_target_temperature": {
                    args: ["value"],
                    types: ["Measure(C)"],
                    required: [true],
                    is_input: [true],
                }
            },
            "queries": {}
        },
        "xkcd": {
            "triggers": {
                "new_comic": {
                    args: ["title", "link", "picture_url"],
                    types: ["String", "Entity(tt:url)", "Entity(tt:picture)"],
                    required: [false,false,false],
                    is_input: [false,false,false],
                }
            },
            "actions": {},
            "queries": {}
        }
    },

    getSchemas: function() {
        return this._schema;
    },

    getMetas: function() {
        return this._meta;
    }
};