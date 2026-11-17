
import { useState } from "react";

export default function Admin({ onAddCampaign, campaigns, onDeleteCampaign, onBack }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");

  function handleSubmit(e) {
  e.preventDefault();

  if (!imageFile) {
    alert("Лутфан расми лоиҳаро интихоб кунед!");
    return;
  }

  const reader = new FileReader();

  reader.onloadend = () => {
    onAddCampaign({
  title: title,
  description: description,
  amount: amount,
  imageUrl: reader.result,
  videoUrl: videoUrl
});

    alert("Эълони хайрия илова шуд!");

    setTitle("");
    setDescription("");
    setAmount("");
    setImageFile(null);
    setVideoUrl("");
  };

  reader.readAsDataURL(imageFile);
}

  return (
    <div className="admin-container">
      <button
  type="button"
  onClick={onBack}
  style={{
    display: "block",
    width: "auto",
    margin: "0 auto 20px",
    background: "#087443"
  }}
>
  ← Бозгашт ба саҳифаи асосӣ
</button>
      <h1>♡ KHAIR TJ</h1>
      <h2>Панели администратор</h2>

      <div className="admin-card">
        <h3>Илова кардани эълони хайрия</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Номи лоиҳаи хайрия"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Маълумот дар бораи лоиҳа"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Маблағи зарурӣ (сомонӣ)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <input
  type="file"
  accept="image/*"
  onChange={(e) => setImageFile(e.target.files[0])}
/>

          <input
  type="url"
  placeholder="Ссылкаи расми лоиҳа"
  value={imageUrl}
  onChange={(e) => setImageUrl(e.target.value)}
/>

<input
  type="url"
  placeholder="Пайванди видеои лоиҳа (YouTube)"
  value={videoUrl}
  onChange={(e) => setVideoUrl(e.target.value)}
/>

          <button type="submit">
            + Илова кардани эълон
          </button>
        </form>
        </div>

      <div style={{ marginTop: "30px", textAlign: "left" }}>
  <h3>Эълонҳои нашршуда</h3>

 {campaigns.map((campaign) => (
    <div
      key={campaign.id}
      style={{
        padding: "15px",
        marginBottom: "10px",
        background: "#f0f7f3",
        borderRadius: "10px"
      }}
    >
      <strong>
        {typeof campaign === "string"
          ? campaign
          : campaign.title}
      </strong>

      <button
        type="button"
        onClick={() => {
         if (window.confirm("Оё мехоҳед ин эълонро нест кунед?")) {

  onDeleteCampaign(campaign.id);
}
        }}
        style={{ marginTop: "10px", background: "#c62828" }}
      >
        Нест кардани эълон
      </button>
    </div>
  ))}
</div>

      <style>{`
        .admin-container {
          min-height: 100vh;
          background: #f0f7f3;
          padding: 30px 20px;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        .admin-container h1 {
          color: #087443;
        }

        .admin-card {
          max-width: 500px;
          margin: 30px auto;
          padding: 30px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 5px 25px #00000012;
        }

        .admin-card input,
        .admin-card textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 14px;
          margin: 10px 0;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 15px;
        }

        .admin-card textarea {
          min-height: 120px;
          resize: vertical;
        }

        .admin-card button {
          width: 100%;
          padding: 14px;
          background: #087443;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}
