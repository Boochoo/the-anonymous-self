import React from "react"

const Card = ({ node: { title, slug, image, description } }) => (
  <div className="">
    <a href={slug} className="">
      <div>
        <div
          className=""
          style={{
            height: 200,
            backgroundImage: `url(https:${image.file.url}?w=640&h=360&fit=thumb)`,
          }}
        />
      </div>
      <div
        className=""
        style={{
          margin: "0.5rem 0.5rem 0 0.5rem",
        }}
      >
        <h3 className="">{title}</h3>
      </div>
    </a>
  </div>
)

export default Card
