"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,888,660];
exports.modules = {

/***/ 692:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(182);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(940);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var next_dist_pages_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_pages_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(603);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);
private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: (next_dist_pages_app__WEBPACK_IMPORTED_MODULE_4___default()),
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PrimitiveViewer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(949);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(165);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(870);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(653);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_3__]);
three__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const PyramidGeometry = ()=>{
    const geometry = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry();
    const vertices = new Float32Array([
        // Base
        0,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        // Apex
        0.5,
        1,
        0.5
    ]);
    const indices = [
        // Base
        0,
        1,
        2,
        0,
        2,
        3,
        // Sides
        0,
        1,
        4,
        1,
        2,
        4,
        2,
        3,
        4,
        3,
        0,
        4
    ];
    geometry.setIndex(indices);
    geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_3__.BufferAttribute(vertices, 3));
    geometry.computeVertexNormals();
    return geometry;
};
const PrimitiveMesh = ({ primitive, onClick })=>{
    const meshRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const geometry = primitive.type === "box" ? new three__WEBPACK_IMPORTED_MODULE_3__.BoxGeometry(...primitive.size) : PyramidGeometry();
    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(()=>{
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.005;
        }
    });
    if (primitive.type === "box" && primitive.faceColors) {
        const materials = primitive.faceColors.map((color)=>new three__WEBPACK_IMPORTED_MODULE_3__.MeshBasicMaterial({
                color,
                side: three__WEBPACK_IMPORTED_MODULE_3__.DoubleSide,
                wireframe: primitive.selected,
                wireframeLinewidth: 2
            }));
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("mesh", {
            ref: meshRef,
            position: primitive.position,
            geometry: geometry,
            material: materials,
            onClick: (e)=>{
                e.stopPropagation();
                onClick();
            }
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("mesh", {
        ref: meshRef,
        position: primitive.position,
        geometry: geometry,
        onClick: (e)=>{
            e.stopPropagation();
            onClick();
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meshBasicMaterial", {
            color: primitive.color,
            wireframe: primitive.selected,
            wireframeLinewidth: 2
        })
    });
};
const Scene = ({ primitives, onPrimitiveClick })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
        camera: {
            position: [
                5,
                5,
                5
            ],
            fov: 75
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ambientLight", {
                intensity: 0.5
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pointLight", {
                position: [
                    10,
                    10,
                    10
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.OrbitControls, {}),
            primitives.map((primitive)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrimitiveMesh, {
                    primitive: primitive,
                    onClick: ()=>onPrimitiveClick(primitive.id)
                }, primitive.id))
        ]
    });
};
const getRandomColor = ()=>`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
const getRandomPosition = ()=>[
        Math.random() * 6 - 3,
        Math.random() * 6 - 3,
        Math.random() * 6 - 3
    ];
function PrimitiveViewer() {
    const [primitives, setPrimitives] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [openDialog, setOpenDialog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedPrimitive, setSelectedPrimitive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [primitiveType, setPrimitiveType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("box");
    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [height, setHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [depth, setDepth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [randomFaceColors, setRandomFaceColors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleAddPrimitives = ()=>{
        const newPrimitives = [];
        for(let i = 0; i < count; i++){
            const id = `${primitiveType}-${Date.now()}-${i}`;
            const color = getRandomColor();
            const position = getRandomPosition();
            const size = [
                width,
                height,
                depth
            ];
            let faceColors;
            if (randomFaceColors) {
                faceColors = Array(primitiveType === "box" ? 6 : 5).fill(0).map(()=>getRandomColor());
            }
            newPrimitives.push({
                id,
                type: primitiveType,
                position,
                size,
                color,
                faceColors,
                selected: false
            });
        }
        setPrimitives([
            ...primitives,
            ...newPrimitives
        ]);
        setOpenDialog(false);
    };
    const handleClear = ()=>{
        setPrimitives([]);
        setSelectedPrimitive(null);
    };
    const handlePrimitiveClick = (id)=>{
        setPrimitives(primitives.map((p)=>({
                ...p,
                selected: p.id === id
            })));
        setSelectedPrimitive(id);
    };
    const handleListItemClick = (id)=>{
        handlePrimitiveClick(id);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            display: "flex",
            height: "100vh"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    width: "300px",
                    padding: "16px",
                    borderRight: "1px solid #ddd"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                        variant: "h6",
                        gutterBottom: true,
                        children: "Geometric Primitives"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                        variant: "contained",
                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                        onClick: ()=>setOpenDialog(true),
                        fullWidth: true,
                        sx: {
                            mb: 2
                        },
                        children: "Add Primitives"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                        variant: "outlined",
                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                        onClick: handleClear,
                        fullWidth: true,
                        sx: {
                            mb: 2
                        },
                        children: "Clear All"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Paper, {
                        sx: {
                            height: "calc(100% - 120px)",
                            overflow: "auto"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.List, {
                            children: primitives.map((primitive)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, {
                                    onClick: ()=>handleListItemClick(primitive.id),
                                    sx: {
                                        cursor: "pointer",
                                        "&:hover": {
                                            backgroundColor: "#f5f5f5"
                                        },
                                        backgroundColor: primitive.id === selectedPrimitive ? "action.selected" : undefined
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemAvatar, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Avatar, {
                                                sx: {
                                                    bgcolor: primitive.color
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {
                                            primary: `${primitive.type} (${primitive.size.join(" x ")})`,
                                            secondary: `Position: [${primitive.position.map((p)=>p.toFixed(2)).join(", ")}]`
                                        })
                                    ]
                                }, primitive.id))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    flex: 1
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Scene, {
                    primitives: primitives,
                    onPrimitiveClick: handlePrimitiveClick
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
                open: openDialog,
                onClose: ()=>setOpenDialog(false),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogTitle, {
                        children: "Add New Primitives"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogContent, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Select, {
                                value: primitiveType,
                                onChange: (e)=>setPrimitiveType(e.target.value),
                                fullWidth: true,
                                sx: {
                                    mb: 2
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
                                        value: "box",
                                        children: "Box"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
                                        value: "pyramid",
                                        children: "Pyramid"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
                                label: "Width",
                                type: "number",
                                value: width,
                                onChange: (e)=>setWidth(parseFloat(e.target.value)),
                                fullWidth: true,
                                sx: {
                                    mb: 2
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
                                label: "Height",
                                type: "number",
                                value: height,
                                onChange: (e)=>setHeight(parseFloat(e.target.value)),
                                fullWidth: true,
                                sx: {
                                    mb: 2
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
                                label: "Depth",
                                type: "number",
                                value: depth,
                                onChange: (e)=>setDepth(parseFloat(e.target.value)),
                                fullWidth: true,
                                sx: {
                                    mb: 2
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
                                label: "Count",
                                type: "number",
                                value: count,
                                onChange: (e)=>setCount(parseInt(e.target.value)),
                                fullWidth: true,
                                sx: {
                                    mb: 2
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "checkbox",
                                        id: "randomFaceColors",
                                        checked: randomFaceColors,
                                        onChange: (e)=>setRandomFaceColors(e.target.checked),
                                        style: {
                                            marginRight: "8px"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "randomFaceColors",
                                        children: "Random colors for each face"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.DialogActions, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                onClick: ()=>setOpenDialog(false),
                                children: "Cancel"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                onClick: handleAddPrimitives,
                                variant: "contained",
                                children: "Add"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 146:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ 653:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Clear");

/***/ }),

/***/ 870:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 165:
/***/ ((module) => {

module.exports = require("@react-three/drei");

/***/ }),

/***/ 784:
/***/ ((module) => {

module.exports = require("@react-three/fiber");

/***/ }),

/***/ 76:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 949:
/***/ ((module) => {

module.exports = import("three");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,35,855,893], () => (__webpack_exec__(692)));
module.exports = __webpack_exports__;

})();