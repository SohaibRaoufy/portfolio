import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Sohaib Raoufy </strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A Data Analyst",
        "A Database Admin",
        "A Software Engineer"
    ],
    about: {
        start: "I've been working for over 6 years on data related projects. " +
            "I'm excited by learning new things, contributing to the data science community," +
            " and spreading the word of data!",
        exit: "I'm fluent at Python, SQL databases, BI tools, R, PHP, Javascript, HTML, CSS and more, " +
            "with a deep interest in Data Science."
    },
    workTimeline: [
        {
            id: "work-4",
            title: "Business System Analyst",
            company: "TD SYNNEX",
            description: "Evaluates organizational needs, gathers and analyzes requirements, and collaborates with stakeholders and IT teams to design, implement, and optimize technology-driven solutions that align business processes with strategic goals.",
            date: "2022-Present",
            icon: <BiRocket/>,
            tags: ["SQL", "Python", "PHP", "Javascript", "XML", "HTML", "CSS", "Wordpress"]
        },
        {
            id: "work-3",
            title: "Database Admin & Data Analyst",
            company: "Assist Consultants Inc",
            description: "Ensure secure, efficient, and reliable database operations. " +
                "Interpret and analyze data to deliver actionable insights and support informed business decisions.",
            date: "2020-2022",
            icon: <BsClipboardData/>,
            tags: ["MySQL", "Excel", "Python", "Django", "HTML", "CSS", "Javascript", "R", "Figma", "Tableaue", "Linux"]
        },
        {
            id: "work-2",
            title: "Software Engineer",
            company: "Ebtakar Road and Construction",
            description: "Design, develop, test, and maintain software applications and systems to meet user needs and business objectives." +
                "While ensuring performance, scalability, and security.",
            date: "2018-2020",
            icon: <FaMobileAlt/>,
            tags: ["Python", "Django", "PHP", "Laravel", "HTML", "CSS", "Javascript", "MySQL", "Wordpress"]
        },
        // {
        //     id: "work-1",
        //     title: "CRM Analytics Coordinator",
        //     company: "Avianca",
        //     description: "Tech leader of a BI, Data Science and DBA team. " +
        //         "Build forecast models, data warehouse and Power BI dashboards.",
        //     date: "2018-2019",
        //     icon: <GiCommercialAirplane/>,
        //     tags: ["ml", "mssql", "python", "docker", "pbi", "azure"]
        // },
        // {
        //     id: "work-0",
        //     title: "BI Analyst",
        //     company: "Onelink BPO",
        //     description: "Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",
        //     date: "2016-2018",
        //     icon: <BsClipboardData/>,
        //     tags: ["python", "mssql", "pbi", "excel"]
        // }
    ]
}


export default homeConfig