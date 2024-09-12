import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SimpleMDE from "react-simplemde-editor";

import axios from "../../api/axios";
import "easymde/dist/easymde.min.css";
import styles from "./addPost.module.scss";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/authSlice";
import { Navigate, useNavigate } from "react-router-dom";

export const AddPost = () => {
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const [category, setCategory] = React.useState<number | "">("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [text, setText] = React.useState("");
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

  const handleCategoryChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setCategory(event.target.value as number);
  };

  const onClickRemoveImage = () => {
    setImageUrl("");
  };

  const onSubmit = async () => {
    try {
      setIsLoading(true);

      const fields = {
        title,
        imageUrl,
        text,
        category,
      };

      const { data } = await axios.post("/posts", fields);

      const id = data._id;

      navigate(`/posts/${id}`);
    } catch (err) {
      console.warn(err);
      alert("Error with your creation of post");
    }
  };

  const onChange = React.useCallback((value: string) => {
    setText(value);
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
      <TextField
        select
        value={category}
        onChange={handleCategoryChange}
        fullWidth
        SelectProps={{
          native: true,
        }}
      >
        <option value="" disabled>
          Choose a Category of Post
        </option>
        <option value={1}>Documents</option>
        <option value={2}>Help</option>
        <option value={3}>Family</option>
      </TextField>
      <SimpleMDE
        className={styles.editor}
        value={text}
        onChange={onChange}
        options={options}
      />
      <div className={styles.buttons}>
        <Button onClick={onSubmit} size="large" variant="contained">
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
