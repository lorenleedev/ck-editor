// App.jsx / App.tsx

import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// ClassicEditor.create(document.querySelector("#editor"), {
//   alignment: {
//     options: ["left", "right"],
//   },
//   toolbar: {
//     items: [
//       "heading",
//       "|",
//       "fontSize",
//       "fontFamily",
//       "fontColor",
//       "fontBackgroundColor",
//       "imageInsert",
//       "|",
//       "bold",
//       "italic",
//       "underline",
//       "strikethrough",
//       "highlight",
//       "removeFormat",
//       "|",
//       "alignment",
//       "|",
//       "numberedList",
//       "bulletedList",
//       "|",
//       "indent",
//       "outdent",
//       "|",
//       "todoList",
//       "link",
//       "blockQuote",
//       "imageUpload",
//       "insertTable",
//       "mediaEmbed",
//       "|",
//       "undo",
//       "redo",
//       "CKFinder",
//     ],
//   },
// })
//   .then((editor) => {
//     console.log("Editor was initialized", editor);
//   })
//   .catch((error) => {
//     console.error(error.stack);
//   });

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Using CKEditor&nbsp;5 build in React</h2>
        <CKEditor
          editor={ClassicEditor}
          // config={{ plugins: [Alignment] }}
          data="<p>Hello from CKEditor&nbsp;5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event) => {
            console.log(event);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    );
  }
}

export default App;
