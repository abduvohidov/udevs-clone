export const HomePage = () => {
	
  const Section = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "black",
  };

  return (
    <div style={Section}>
      <div>
        <img
          src="https://media.licdn.com/dms/image/D4D12AQEwCsGPVYamBw/article-cover_image-shrink_600_2000/0/1698392997369?e=2147483647&v=beta&t=XMO_upn0DfifUHLOA352hdcH71tM5yo9RtER-6JHpyw"
          alt="img"
        />
      </div>
    </div>
  );
};
