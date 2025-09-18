import { produce } from "immer";




export const themeSwitch = (theme = "vertical", attributes) => produce(attributes, (draft) => {

  draft["theme"] = theme;


  switch (theme) {
    case 'vertical':
      draft['styles'] = {
        "columns": {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1,
          "gapX": "1.5rem",
          "gapY": "2rem"
        },
        "body": {
          "padding": {
            "desktop": {
              "top": "32px",
              "right": "24px",
              "bottom": "32px",
              "left": "24px"
            },
            "tablet": {
              "top": "32px",
              "right": "24px",
              "bottom": "32px",
              "left": "24"
            },
            "mobile": {
              "top": "32px",
              "right": "24px",
              "bottom": "32px",
              "left": "24"
            }
          },
          "border": {
            "width": "5px",
            "style": "solid",
            "color": "#470099D1",
            "radius": "16px",
            "side": "top"
          },
          "bg": {
            "color": "#fff"
          },
          "align": "center",
          "shadow": [
            {
              "hOffset": "0px",
              "vOffset": "4px",
              "blur": "6px",
              "spread": "-1px",
              "color": "rgba(0, 0, 0, 0.1)",
              "isInset": false
            }
          ],
          "hover": {
            "shadow": [
              {
                "hOffset": "0px",
                "vOffset": "20px",
                "blur": "25px",
                "spread": "-5px",
                "color": "rgba(0, 0, 0, 0.1)",
                "isInset": false
              }
            ]
          }
        },
        "title": {
          "typo": {
            "fontSize": {
              "desktop": "1.5rem",
              "tablet": "1.2rem",
              "mobile": "1rem"
            },
            "fontWeight": 600,
            "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
            "lineHeight": "1.6rem",
            "letterSpacing": "normal"
          },
          "colors": {
            "color": "#1a202c",
            "bg": ""
          }
        },
        "description": {
          "typo": {
            "fontSize": {
              "desktop": "1rem",
              "tablet": "1rem",
              "mobile": "1rem"
            },
            "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
            "lineHeight": "1.6rem",
            "letterSpacing": "normal"
          },
          "colors": {
            "color": "#4a5568",
            "bg": ""
          }
        },
        "icon": {
          "bg": {
            "color": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          },
          "size": 100,
          "color": "#fff"
        }
      }
      break;

    case 'horizontal':
      draft['styles'] = {
        "columns": {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1,
          "gapX": "1.5rem",
          "gapY": "2rem"
        },
        "body": {
          "padding": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "border": {
            "width": "0px",
            "style": "solid",
            "color": "",
            "radius": "16px",
            "side": ""
          },
          "bg": {
            "color": "#fff"
          },
          "align": "left",
          "shadow": [
            {
              "hOffset": "0px",
              "vOffset": "4px",
              "blur": "6px",
              "spread": "-1px",
              "color": "rgba(0, 0, 0, 0.1)",
              "isInset": false
            }
          ],

          "hover": {
            "shadow": [
              {
                "hOffset": "0px",
                "vOffset": "20px",
                "blur": "40px",
                "spread": "0",
                "color": "rgba(0, 0, 0, 0.15)",
                "isInset": false
              }
            ]
          }
        },
        "title": {
          "typo": {
            "fontSize": {
              "desktop": "1.5rem",
              "tablet": "1.2rem",
              "mobile": "1rem"
            },
            "fontWeight": 600,
            "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
            "lineHeight": "1.6rem",
            "letterSpacing": "normal"
          },
          "colors": {
            "color": "#1a202c",
            "bg": ""
          }
        },
        "description": {
          "typo": {
            "fontSize": {
              "desktop": "1rem",
              "tablet": "1rem",
              "mobile": "1rem"
            },
            "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
            "lineHeight": "1.6rem",
            "letterSpacing": "normal"
          },
          "colors": {
            "color": "#4a5568",
            "bg": ""
          }
        },
        "icon": {
          "bg": {
            "color": "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)"
          },
          "size": 100,
          "color": "#fff",
          "bar": {
            "color": "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)"
          }
        }
      }
      break;

    case 'diagonal':
      draft['styles'] = {
        "columns": {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1,
          "gapX": "1.5rem",
          "gapY": "2rem"
        },
        "body": {
          "padding": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "border": {
            "width": "0px",
            "style": "solid",
            "color": "",
            "radius": "16px",
            "side": ""
          },
          "bg": {
            "color": "#fff"
          },
          "align": "left",
          "shadow": [
            {
              "hOffset": "0px",
              "vOffset": "4px",
              "blur": "6px",
              "spread": "-1px",
              "color": "rgba(0, 0, 0, 0.1)",
              "isInset": false
            }
          ],
          "hover": {
            "shadow": [
              {
                "hOffset": "0px",
                "vOffset": "20px",
                "blur": "25px",
                "spread": "-5px",
                "color": "rgba(0, 0, 0, 0.1)",
                "isInset": false
              }
            ]
          }
        },
        "title": {
          "typo": {
            "fontSize": {
              "desktop": "1.5rem",
              "tablet": "1.2rem",
              "mobile": "1rem"
            },
            "fontWeight": 600,
            "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
            "lineHeight": "1.6rem",
            "letterSpacing": "normal"
          },
          "colors": {
            "color": "#1a202c",
            "bg": ""
          }
        },
        "description": {
          "typo": {
            "fontSize": {
              "desktop": "1rem",
              "tablet": "1rem",
              "mobile": "1rem"
            },
            "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
            "lineHeight": "1.6rem",
            "letterSpacing": "normal"
          },
          "colors": {
            "color": "#4a5568",
            "bg": ""
          }
        },
        "icon": {
          "bg": {
            "color": "rgba(255, 255, 255, 0.9)"
          },
          "size": 100,
          "color": "#667eea",
        },
        "diagonal": {
          "bg": "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
        }
      }
      break;
  }

})




export const addSvgAttrs = (svgString, attrs = {}) => {
  let extra = Object.entries(attrs)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");
  return svgString.replace("<svg", `<svg ${extra}`);
};