import "../components/rightFilter.css";
function RightFilter({ selectedFilter, setSelectedFilter }) {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          height: "60px",
          left: "20px",
          top: "-68px",
          width: "86%",
        }}
        className="mt-4 ms-4 filters btn-group_right d-flex fs-6 "
      >
        <button
          onClick={() => setSelectedFilter("all")} // Update selected filter to "all"
          className={`rounded btn btn-secondary ${
            selectedFilter === "all" ? "active" : ""
          }`}
        >
          all
        </button>
        <button
          onClick={() => setSelectedFilter("css")} // Update selected filter to "css"
          data-filter="css"
          className={`rounded btn btn-secondary ${
            selectedFilter === "css" ? "active" : ""
          }`}
        >
          Css
        </button>
        <button
          onClick={() => setSelectedFilter("python")} // Update selected filter to "css"
          data-filter="python"
          className={`rounded btn btn-secondary ${
            selectedFilter === "python" ? "active" : ""
          }`}
        >
          Python
        </button>
        <button
          onClick={() => setSelectedFilter("web Developement")} // Update selected filter to "css"
          data-filter="web Developement"
          className={`rounded btn btn-secondary ${
            selectedFilter === "web Developement" ? "active" : ""
          }`}
        >
          Web Developement
        </button>
        <button
          onClick={() => setSelectedFilter("javascript")} // Update selected filter to "css"
          data-filter="javascript"
          className={`rounded btn btn-secondary ${
            selectedFilter === "javascript" ? "active" : ""
          }`}
        >
          Javascript
        </button>
        <button
          onClick={() => setSelectedFilter("java")} // Update selected filter to "css"
          data-filter="java"
          className={`rounded btn btn-secondary ${
            selectedFilter === "java" ? "active" : ""
          }`}
        >
          Java
        </button>
        <button
          onClick={() => setSelectedFilter("html css")} // Update selected filter to "css"
          data-filter="html css"
          className={`rounded btn btn-secondary ${
            selectedFilter === "html css" ? "active" : ""
          }`}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => setSelectedFilter("entertainment")} // Update selected filter to "css"
          data-filter="entertainment"
          className={`rounded btn btn-secondary ${
            selectedFilter === "entertainment" ? "active" : ""
          }`}
        >
          Entertainment
        </button>
        <button
          onClick={() => setSelectedFilter("web-tools")} // Update selected filter to "css"
          data-filter="web-tools"
          className={`rounded btn btn-secondary ${
            selectedFilter === "web-tools" ? "active" : ""
          }`}
        >
          Web-Tools
        </button>
        <button
          onClick={() => setSelectedFilter("cpp-web")} // Update selected filter to "css"
          data-filter="cpp-web"
          className={`rounded btn btn-secondary ${
            selectedFilter === "cpp-web" ? "active" : ""
          }`}
        >
          Cpp-Web
        </button>
        <button
          onClick={() => setSelectedFilter("react")} // Update selected filter to "css"
          data-filter="react"
          className={`rounded btn btn-secondary ${
            selectedFilter === "react" ? "active" : ""
          }`}
        >
          React
        </button>
      </div>
    </div>
  );
}
export default RightFilter;
