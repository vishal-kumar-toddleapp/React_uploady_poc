// import React, { useCallback } from "react";
// import { useDropzone } from "react-dropzone";
// import Counter from "./Counter";
// function MyDropzone() {
//   const [files, setFiles] = React.useState([]);
//   const handleFiles = (e) => {
//     console.log("folder", e.target.webkitEntries);

//     setFiles(e.target.files);
//   };
//   console.log("files", files);

//   // dummy folder/.DS_Store
//   // "dummy folder/New Routine By Meet 05 Jul 2023 - 01 Feb 2024.xlsx"
//   //"dummy folder/Screenshot 2023-06-26 at 10.42.56 AM.png"
//   //  "dummy folder/inside folder/.DS_Store";
//   //"dummy folder/inside folder/Screenshot 2023-05-22 at 6.30.57 PM.png"
//   //"dummy folder/inside folder/Screenshot 2023-05-24 at 4.29.37 PM.png";

//   const getNestedFolderStructure = function (obj) {
//     console.log("obj", obj);
//     if (Object.keys(obj).length === 0) return;
//     let result = {};
//     for (let key in obj) {
//       // console.log("ln 40", key);
//       if (obj[key]?.type == "") {
//         let path = obj[key]?.webkitRelativePath?.split("/");

//         if (path) {
//           path.pop();
//         }
//         let current = result;
//         for (let i = 0; i < path?.length; i++) {
//           if (!current[path[i]]) {
//             current[path[i]] = {};
//           }
//           current = current[path[i]];
//         }
//       } else {
//         let path = obj[key]?.webkitRelativePath?.split("/");
//         let current = result;
//         for (let i = 0; i < path?.length; i++) {
//           if (!current[path[i]]) {
//             current[obj[key]?.name] = obj[key]?.name;
//           }
//           current = current[path[i]];
//         }
//       }
//     }
//     return result;
//   };

//   console.log("ln 36", getNestedFolderStructure(files));

//   return (
//     <>
//       <div>
//         <input
//           type="file"
//           directory=""
//           webkitdirectory=""
//           onChange={handleFiles}
//         ></input>
//       </div>
//       <div>{files.length}</div>
//       {files.length > 0
//         ? Object.values(files).map((file, index) => (
//             <>
//               <div key={index}>{URL.createObjectURL(file)}</div>
//               <img
//                 style={{ width: "100px", height: "100px" }}
//                 src={URL.createObjectURL(file)}
//               />
//             </>
//           ))
//         : null}
//     </>
//   );
// }
// export default MyDropzone;
