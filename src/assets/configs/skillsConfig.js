import {
    SiPython,
    SiPhp,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiDocker,
    SiMicrosoftazure,
    SiRedis,
    SiR,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiWindowsterminal,
    SiSnowflake,
    SiApacheairflow,
    SiApachekafka,
    SiPowerbi,
    SiMicrosoftexcel,
    SiTableau,
    SiOracle,
    SiFigma,
    SiLooker,
    SiMicrosoftvisio,
    SiQuarto,
    SiApachesuperset,
    SiJira,
    SiAsana
} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {FaGitAlt, FaRobot} from "react-icons/fa";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiPostgresql size={50}/>,
            text: "Postgres"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiMicrosoftsqlserver size={50}/>,
            text: "MSSQL"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiDocker size={50}/>,
            text: "Docker"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiMicrosoftazure size={50}/>,
            text: "Azure"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiPhp size={50}/>,
            text: "Php"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        }
    ],
    complementarySkills: [
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "MySQL"
        },
        // {
        //     id: "skills-6",
        //     className: "skill-icon",
        //     icon: <SiRedis size={50}/>,
        //     text: "Redis"
        // },
          {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiR size={50}/>,
            text: "R"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiWindowsterminal size={50}/>,
            text: "Bash"
        },
        // {
        //     id: "skills-8",
        //     className: "skill-icon",
        //     icon: <SiSnowflake size={50}/>,
        //     text: "Snowflake"
        // },
        // {
        //     id: "skills-9",
        //     className: "skill-icon",
        //     icon: <SiApacheairflow size={50}/>,
        //     text: "Airflow"
        // },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiJavascript size={50}/>,
            text: "JS"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiCss3 size={50}/>,
            text: "CSS 3"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML 5"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiReact size={50}/>,
            text: "React"
        }
        ,
        // {
        //     id: "skills-14",
        //     className: "skill-icon",
        //     icon: <SiApachekafka size={50}/>,
        //     text: "Kafka"
        // }
        ,
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiPowerbi size={50}/>,
            text: "Power BI"
        },
         {
            id: "skills-16",
            className: "skill-icon",
            icon: <SiMicrosoftexcel size={50}/>,
            text: "Excel"
        },
        {
            id: "skills-17",
            className: "skill-icon",
            icon: <SiTableau size={50}/>,
            text: "Tableau"
        },
         {
            id: "skills-18",
            className: "skill-icon",
            icon: <SiOracle size={50}/>,
            text: "Oracle SQL"
        },
         {
            id: "skills-19",
            className: "skill-icon",
            icon: <SiFigma size={50}/>,
            text: "Figma"
        },
          {
            id: "skills-20",
            className: "skill-icon",
            icon: <SiLooker size={50}/>,
            text: "Looker"
        },
         {
            id: "skills-21",
            className: "skill-icon",
            icon: <SiMicrosoftvisio size={50}/>,
            text: "Visio"
        },
         {
            id: "skills-22",
            className: "skill-icon",
            icon: <SiQuarto size={50}/>,
            text: "Quarto"
        },
        {
            id: "skills-23",
            className: "skill-icon",
            icon: <SiApachesuperset size={50}/>,
            text: "Superset"
        },
        {
            id: "skills-24",
            className: "skill-icon",
            icon: <SiJira size={50}/>,
            text: "jira"
        },
           {
            id: "skills-25",
            className: "skill-icon",
            icon: <SiAsana size={50}/>,
            text: "Asana"
        }



    ]
}

export default skillsConfig
