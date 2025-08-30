import React, { useState, useRef } from "react";

const SellProduct = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Handle camera access and capture
  const handleCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      alert("Error accessing camera: " + error.message);
      console.error("Camera access error:", error);
    }
  };

  // Handle gallery upload
  const handleGalleryUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImageSrc(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Sell Your Product</h2>
      <div className="text-center">
        <button
          className="btn btn-warning mb-3"
          onClick={handleCameraAccess}
          style={{ marginRight: "10px" }}
        >
          Use Camera
        </button>
        <input
          type="file"
          accept="image/*"
          onChange={handleGalleryUpload}
          className="btn btn-secondary mb-3"
          style={{ display: "inline-block" }}
        />

        {/* Camera and Canvas Elements */}
        <video ref={videoRef} style={{ width: "100%", maxWidth: "400px", display: imageSrc ? "none" : "block" }}></video>
        <canvas ref={canvasRef} style={{ width: "100%", maxWidth: "400px", display: "none" }}></canvas>
        {imageSrc && (
          <div>
            <img src={imageSrc} alt="Captured or Uploaded" style={{ width: "100%", maxWidth: "400px" }} />
            <button className="btn btn-danger mt-2" onClick={() => setImageSrc(null)}>
              Retake/Remove
            </button>
          </div>
        )}
  
      </div>
    </div>
  );
};

export default SellProduct;