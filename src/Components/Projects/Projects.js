import React from "react";

import ProjectsCard from "./ProjectsCard";
import "./project.css";
const Projects = () => {
  const projectData = [
    {
      id: "projectData1",
      title: "Lock Installation for Residential House.",
      image:
        "https://images.pexels.com/photos/114741/pexels-photo-114741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea soluta quibusdam explicabo vitae laborum distinctio, corrupti adipisci rem qui quae voluptatibus fugit. Maxime ratione neque delectus illum voluptatem? Qui illum labore nesciunt explicabo, rem blanditiis optio sint laboriosam totam dolore nisi, ea deleniti. Odit magnam nobis nostrum cumque, sequi soluta officia maiores tempora enim recusandae quidem laboriosam itaque voluptatum ducimus quia repellendus provident.",
    },
    {
      id: "projectData2",
      title: "Handing Over Keys After Project Succession.",
      image:
        "https://images.pexels.com/photos/5474291/pexels-photo-5474291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea soluta quibusdam explicabo vitae laborum distinctio, corrupti adipisci rem qui quae voluptatibus fugit. Maxime ratione neque delectus illum voluptatem? Qui illum labore nesciunt explicabo, rem blanditiis optio sint laboriosam totam dolore nisi, ea deleniti. Odit magnam nobis nostrum cumque, sequi soluta officia maiores tempora enim recusandae quidem laboriosam itaque voluptatum ducimus quia repellendus provident.",
    },
    {
      id: "projectData3",
      title: "Team Member Working Hard... ",
      image:
        "https://images.pexels.com/photos/64609/pexels-photo-64609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea soluta quibusdam explicabo vitae laborum distinctio, corrupti adipisci rem qui quae voluptatibus fugit. Maxime ratione neque delectus illum voluptatem? Qui illum labore nesciunt explicabo, rem blanditiis optio sint laboriosam totam dolore nisi, ea deleniti. Odit magnam nobis nostrum cumque, sequi soluta officia maiores tempora enim recusandae quidem laboriosam itaque voluptatum ducimus quia repellendus provident.",
    },
    {
      id: "projectData4",
      title: "Stylish Lock Mechanism",
      image:
        "https://images.pexels.com/photos/943922/pexels-photo-943922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea soluta quibusdam explicabo vitae laborum distinctio, corrupti adipisci rem qui quae voluptatibus fugit. Maxime ratione neque delectus illum voluptatem? Qui illum labore nesciunt explicabo, rem blanditiis optio sint laboriosam totam dolore nisi, ea deleniti. Odit magnam nobis nostrum cumque, sequi soluta officia maiores tempora enim recusandae quidem laboriosam itaque voluptatum ducimus quia repellendus provident.",
    },
    {
      id: "projectData5",
      title: "Making New Keys for a lock",
      image:
        "https://images.unsplash.com/photo-1605351792643-fe0c43d18762?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",

      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea soluta quibusdam explicabo vitae laborum distinctio, corrupti adipisci rem qui quae voluptatibus fugit. Maxime ratione neque delectus illum voluptatem? Qui illum labore nesciunt explicabo, rem blanditiis optio sint laboriosam totam dolore nisi, ea deleniti. Odit magnam nobis nostrum cumque, sequi soluta officia maiores tempora enim recusandae quidem laboriosam itaque voluptatum ducimus quia repellendus provident.",
    },
    {
      id: "projectData6",
      title: "Luxery Door Lock",
      image:
        "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea soluta quibusdam explicabo vitae laborum distinctio, corrupti adipisci rem qui quae voluptatibus fugit. Maxime ratione neque delectus illum voluptatem? Qui illum labore nesciunt explicabo, rem blanditiis optio sint laboriosam totam dolore nisi, ea deleniti. Odit magnam nobis nostrum cumque, sequi soluta officia maiores tempora enim recusandae quidem laboriosam itaque voluptatum ducimus quia repellendus provident.",
    },
  ];

  return (
    <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-4">
      {projectData.map((project) => (
        <ProjectsCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default Projects;
