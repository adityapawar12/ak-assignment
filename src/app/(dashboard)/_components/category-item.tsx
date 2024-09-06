"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CategoryItem({
  id,
  name,
  userId,
}: {
  id: number;
  name: string;
  userId: number;
}) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    const getCategoryIsChecked = async () => {
      const response = await axios.post("/api/category-is-checked", {
        categoryId: id,
        userId: userId,
      });
      console.log(id, userId, response.data.isChecked);
      setIsChecked(response.data.isChecked);
    };

    getCategoryIsChecked();
  }, [id, userId]);

  const handleToggle = async () => {
    setIsSubmitting(true);
    if (!isChecked) {
      setIsChecked((prev) => !prev);
      const response = await axios.post("/api/add-category", {
        categoryId: id,
        userId: userId,
      });
      toast(response.data.message || "", {
        type: "success",
        autoClose: 1000,
      });
      setIsSubmitting(false);
    } else {
      setIsChecked((prev) => !prev);
      const response = await axios.post("/api/remove-category", {
        categoryId: id,
        userId: userId,
      });
      toast(response.data.message || "", {
        type: "success",
        autoClose: 1000,
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        disabled={isSubmitting}
        checked={isChecked}
        name={"checkbox-" + id}
        id={"checkbox-" + id}
        className="mr-2"
        onChange={handleToggle}
      />
      <label htmlFor={"checkbox-" + id}>{name}</label>
    </div>
  );
}

export default CategoryItem;
