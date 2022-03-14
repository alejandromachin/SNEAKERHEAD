import { useState } from "react";
import { useDispatch } from "react-redux";
import { Sneaker } from "../../Types/Sneaker";

interface CreateAdFormProps {
  id: string;
  sneaker: Sneaker;
}

const CreateAdForm = ({ id, sneaker }: CreateAdFormProps): JSX.Element => {
  const blankFields = {
    condition: "",
    images: "",
    price: "",
    size: "",
    state: "",
    box: "",
  };
  const dispatch = useDispatch();

  const [adData, setAdData] = useState(blankFields);

  const resetForm = () => {
    setAdData(blankFields);
  };

  const listItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const adDataFinal = new FormData();
    adDataFinal.append("brand", sneaker.brand);
    adDataFinal.append("style", sneaker.style);
    adDataFinal.append("colorway", sneaker.colorway);
    adDataFinal.append("condition", adData.condition);
    adDataFinal.append("condition", adData.condition);
    adDataFinal.append("images", adData.images);
    adDataFinal.append("price", adData.price);
    adDataFinal.append("size", adData.size);
    adDataFinal.append("state", adData.state);
    adDataFinal.append("box", adData.box);
    adDataFinal.append("owner", id);
    // dispatch(thunk(adDataFinal));
    resetForm();
  };
  const changeData = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setAdData({
      ...adData,
      [event.target.id]:
        event.target.type === "file"
          ? (
              (event as React.ChangeEvent<HTMLInputElement>).target
                .files as FileList
            )[0]
          : event.target.value,
    });
  };

  return (
    <>
      <form onSubmit={listItem} noValidate autoComplete="off">
        <label htmlFor="state">Are they used or new? </label>
        <select id="state" value={adData.state} onChange={changeData} required>
          <option value="">-</option>
          <option value="NEW">new</option>
          <option value="USED">used</option>
        </select>
        <label htmlFor="condition">Condition:</label>
        <select
          id="condition"
          value={adData.condition}
          onChange={changeData}
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <label htmlFor="image1">Image:</label>
        <input
          type="file"
          name="file"
          id="image1"
          onChange={changeData}
          required
        />
        <label htmlFor="image2">Image:</label>
        <input
          type="file"
          name="file"
          id="image2"
          onChange={changeData}
          required
        />
        <label htmlFor="image3">Image:</label>
        <input
          type="file"
          name="file"
          id="image3"
          onChange={changeData}
          required
        />
        <label htmlFor="image4">Image:</label>
        <input
          type="file"
          name="file"
          id="image4"
          onChange={changeData}
          required
        />
        <label htmlFor="price">Price: </label>
        <input
          type="text"
          id="price"
          value={adData.price}
          onChange={changeData}
        />
        <label htmlFor="size">Size:</label>
        <select id="size" value={adData.size} onChange={changeData} required>
          <option value="">-</option>
          <option value="35">35</option>
          <option value="35.5">35.5</option>
          <option value="36">36</option>
          <option value="36.5">36.5</option>
          <option value="37">37</option>
          <option value="37.5">37.5</option>
          <option value="38.5">38.5</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="40.5">40.5</option>
          <option value="41">41</option>
          <option value="41.5">41.5</option>
          <option value="42">42</option>
          <option value="42.5">42.5</option>
          <option value="43">43</option>
          <option value="43.5">43.5</option>
          <option value="44">44</option>
          <option value="44.5">44.5</option>
          <option value="45">45</option>
        </select>
        <label htmlFor="box">Box condition:</label>
        <select id="box" value={adData.box} onChange={changeData} required>
          <option value="">-</option>
          <option value="Good">Good</option>
          <option value="Damaged">Damaged</option>
          <option value="NoBox">No box</option>
        </select>
        <button type="submit">LIST</button>
      </form>
    </>
  );
};

export default CreateAdForm;
