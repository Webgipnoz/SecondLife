import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SimpleMDE from "react-simplemde-editor";

import axios from "../../api/axios";
import "easymde/dist/easymde.min.css";
import styles from "./addPost.module.scss";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/authSlice";
import { Navigate } from "react-router-dom";

export const AddPost = () => {
  const isAuth = useSelector(selectIsAuth);
  const [isLoading, setIsLoading] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const inputFileRef = React.useRef<HTMLInputElement | null>(null);

  const handleChangeFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const files = event.target.files;
      if (files && files[0]) {
        const formData = new FormData();
        formData.append("image", files[0]);
        const { data } = await axios.post("/upload", formData);
        setImageUrl(data.url);
      }
    } catch (err) {
      console.log(err);
      alert("Error with inst file");
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl("");
  };

  const onChange = React.useCallback((value: string) => {
    setValue(value);
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Enter Text...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
        uniqueId: "post-autosave",
      },
    }),
    []
  );

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }

  console.log(title, value);

  return (
    <Paper style={{ padding: 30 }}>
      <Button
        onClick={() => inputFileRef.current && inputFileRef.current.click()}
        variant="outlined"
        size="large"
      >
        Enter preview
      </Button>
      <input
        ref={inputFileRef}
        type="file"
        onChange={handleChangeFile}
        hidden
      />
      {imageUrl && (
        <>
          <Button
            variant="contained"
            color="error"
            onClick={onClickRemoveImage}
          >
            Delete
          </Button>

          <img
            className={styles.image}
            src={`http://localhost:5000${imageUrl}`}
            alt="Uploaded"
          />
        </>
      )}
      <br />
      <br />
      <TextField
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Title of post..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <SimpleMDE
        className={styles.editor}
        value={value}
        onChange={onChange}
        options={options}
      />
      <div className={styles.buttons}>
        <Button size="large" variant="contained">
          Add
        </Button>
        <a href="/">
          <Button size="large">Canсel</Button>
        </a>
      </div>
    </Paper>
  );
};

export default AddPost;
