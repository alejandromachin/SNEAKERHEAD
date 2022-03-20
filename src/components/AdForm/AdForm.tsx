import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createAdThunk } from "../../redux/thunks/adsThunks";
import { Sneaker } from "../../Types/Sneaker";
import { AdFormContainer } from "./AdFormStyles";

interface AdFormProps {
  userId: string;
  sneaker: Sneaker;
}

const AdForm = ({ userId, sneaker }: AdFormProps): JSX.Element => {
  const blankFields = {
    condition: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    price: "",
    size: "",
    state: "",
    box: "",
  };
  const dispatch = useDispatch();

  const [adData, setAdData] = useState(blankFields);
  const [disableButton, setDisableButton] = useState<boolean>(true);

  const resetForm = () => {
    setAdData(blankFields);
  };
  useEffect(() => {
    if (
      adData.condition !== "" &&
      adData.price !== "" &&
      adData.size !== "" &&
      adData.state !== "" &&
      adData.box !== "" &&
      adData.image1 !== "" &&
      adData.image2 !== "" &&
      adData.image3 !== "" &&
      adData.image4 !== ""
    ) {
      setDisableButton(false);
    }
  }, [adData]);

  const listItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const adDataFinal = new FormData();
    adDataFinal.append("brand", (sneaker as Sneaker).brand);
    adDataFinal.append("style", (sneaker as Sneaker).style);
    adDataFinal.append("colorway", (sneaker as Sneaker).colorway);
    adDataFinal.append("condition", adData.condition);
    adDataFinal.append("image1", adData.image1);
    adDataFinal.append("image2", adData.image2);
    adDataFinal.append("image3", adData.image3);
    adDataFinal.append("image4", adData.image4);
    adDataFinal.append("price", `${adData.price}€`);
    adDataFinal.append("size", adData.size);
    adDataFinal.append("state", adData.state);
    adDataFinal.append("box", adData.box);
    adDataFinal.append("owner", userId);
    adDataFinal.append("sneakerId", (sneaker as Sneaker).id);

    dispatch(createAdThunk(adDataFinal));
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
    <AdFormContainer>
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
        <div>Photos:</div>
        <label className="adForm__fileUpload" htmlFor="image1">
          Click to add a photo
        </label>
        <input
          type="file"
          name="file"
          id="image1"
          onChange={changeData}
          required
        />
        <label className="adForm__fileUpload" htmlFor="image2">
          Click to add a photo
        </label>
        <input
          type="file"
          name="file"
          id="image2"
          onChange={changeData}
          required
        />
        <label className="adForm__fileUpload" htmlFor="image3">
          Click to add a photo
        </label>
        <input
          type="file"
          name="file"
          id="image3"
          onChange={changeData}
          required
        />
        <label className="adForm__fileUpload" htmlFor="image4">
          Click to add a photo
        </label>
        <input
          type="file"
          name="file"
          id="image4"
          onChange={changeData}
          required
        />
        <label htmlFor="price">Price: </label>
        <input
          type="number"
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
        <label htmlFor="box">Box:</label>
        <select id="box" value={adData.box} onChange={changeData} required>
          <option value="">-</option>
          <option value="Good">Good</option>
          <option value="Damaged">Damaged</option>
          <option value="No box">No box</option>
        </select>
        <button
          type="submit"
          className={disableButton ? "AdForm_Button__disabled" : ""}
          disabled={disableButton ? true : false}
        >
          {disableButton ? "FILL ALL THE INFO" : "LIST"}
        </button>
      </form>
    </AdFormContainer>
  );
};

export default AdForm;
