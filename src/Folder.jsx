import React from "react";

import Uploady, { send, useRequestPreSend } from "@rpldy/uploady";
import createUploader from "@rpldy/uploader";
import UploadDropZone from "@rpldy/upload-drop-zone";
import { useItemProgressListener, useItemFinishListener } from "@rpldy/uploady";
import { UPLOADER_EVENTS } from "@rpldy/uploader";
import ChunkedUploady from "@rpldy/chunked-uploady";
const App = () => {
  const [uploadedFiles, setUploadedFiles] = React.useState([]);

  const size = uploadedFiles.length;
  let count = 0;
  const MyComponent = () => {
    useItemFinishListener((item, options) => {
      count++;
    });
  };

  const uploader = createUploader({
    destination: {
      url: "https://webhook.site/4cce99b6-8ef2-42c7-a3ab-a0af25585823",
    },
  });

  uploader.once(UPLOADER_EVENTS.BATCH_ADD, (batch) => {
    console.log(`NEW BATCH ADDED WITH ${batch.items.length} FILES`, batch);
  });

  const Urltest = () => {
    useRequestPreSend(({ items, options }) => {
      console.log("items..............", items, options);
      function generateRandomValue() {
        return Math.floor(Math.random() * 2);
      }
      const destinationUrl = [
        "https://webhook.site/4cce99b6-8ef2-42c7-a3ab-a0af25585823",
        "https://webhook.site/ddb9f5bb-c559-4a55-b174-e7d57322ecbb",
      ];

      return {
        options: {
          destination: {
            url: destinationUrl[generateRandomValue()],
          },
        },
      };
    });
    // alterante way to use useRequestPreSend
    // const mySend = (items, url, sendOptions, onProgress) => {
    //   console.log("items................", {
    //     items,
    //   });
    //   //implement some custom logic here
    //   function generateRandomValue() {
    //     return Math.floor(Math.random() * 2);
    //   }
    //   const destinationUrl = [
    //     "https://webhook.site/4cce99b6-8ef2-42c7-a3ab-a0af25585823",
    //     "https://webhook.site/3d6f0333-60e3-4bf8-825a-7b37df27bf69",
    //   ];
    //   return send(
    //     items,
    //     destinationUrl[generateRandomValue()],
    //     sendOptions,
    //     onProgress
    //   );
    // };

    return (
      <>
        <UploadDropZone
          onDragOverClassName="drag-over"
          grouped
          // send={mySend}
          htmlDirContentParams={{
            recursive: true,
            withFullPath: true,
          }}
          // enhancer={myEnhancer}
          // concurrent={true}
          // maxConcurrent={1}
          maxGroupSize={1}
          dropHandler={async (e, getFiles) => {
            // console.log("e", e.target.files);
            let fileList = await getFiles();
            // console.log("fileList", fileList);
            setUploadedFiles(fileList);

            return fileList;
          }}
        >
          <div
            style={{
              height: "200px",
              width: "200px",
              display: "flex",
              justifyContent: "center",
              border: "1px solid black",
              alignItems: "center",
            }}
          >
            <div>Drag&Drop File(s) Here</div>
          </div>
        </UploadDropZone>
      </>
    );
  };
  const UploadProgress = () => {
    const progressData = useItemProgressListener();

    if (progressData && progressData.completed === 100) {
      // console.log("progressData", progressData);
    }

    return (
      <>
        <div></div>
        <div>
          Finished {count}/{size}
        </div>
      </>
    );
  };

  return (
    <div>
      <ChunkedUploady
        webkitdirectory={true}
        autoUpload={true}
        multiple={true}
        chunkSize={5120000}
        concurrent={true}
        maxConcurrent={3}
      >
        <Urltest />
        <UploadProgress />
        <MyComponent />
      </ChunkedUploady>
    </div>
  );
};

export default App;
