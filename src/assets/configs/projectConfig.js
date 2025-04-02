import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";
import { SiTableau } from "react-icons/si";
import tableauLongon from "../images/tableau_london_crime.png"
import dataCleaning from "../images/sql_data_cleaning.png"
import portfolio from "../images/portfolio.png"
import dataExploration from "../images/data_exploration.png"
import tidyverseImage from "../images/tidyverse-workflow.png"
import pandaImage from "../images/python-data-analysis-using-numpy-pandas-matplotlib.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-5",
        title: "Insights into London's crime data",
        links: [
            {
                name: "repo",
                url: "https://public.tableau.com/app/profile/sahar.sadat/viz/London_17026099891550/Dashboard2",
                icon: <SiTableau />,
            },
            // {
            //     name: "fork",
            //     url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/fork",
            //     icon: <BiGitRepoForked/>,
            // },
            // {
            //     name: "subscription",
            //     url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/subscription",
            //     icon: <AiFillEye/>,
            // },
            // {
            //     name: "docs",
            //     url: "https://sklearn-genetic-opt.readthedocs.io/en/stable/",
            //     icon: <ImBook/>,
            // }
        ],
        image: tableauLongon,
        description: "I am unlocking insights into London's crime data! Used SQL, Excel, Tableau, and Figma for dynamic visualizations.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Data Cleaning with SQL",
        links: [
            {
                name: "repo",
                url: "https://github.com/SohaibRaoufy/PortfolioProjects/blob/main/Data%20Cleaning%20Portfolio.sql",
                icon: <AiFillGithub/>
            },
            // {
            //     name: "fork",
            //     url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/fork",
            //     icon: <BiGitRepoForked/>
            // },
            // {
            //     name: "subscription",
            //     url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/subscription",
            //     icon: <AiFillEye/>
            // }
        ],
        image: dataCleaning,
        description: "In this project I cleaned housing data using SQL.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Data Exploration",
        links: [
            {
                name: "repo",
                url: "https://github.com/SohaibRaoufy/PortfolioProjects/blob/main/Covid%20Portfolio%20Project%20actual%20scripts.sql",
                icon: <AiFillGithub/>
            },
            // {
            //     name: "fork",
            //     url: "https://github.com/rodrigo-arenas/pyworkforce/fork",
            //     icon: <BiGitRepoForked/>
            // },
            // {
            //     name: "subscription",
            //     url: "https://github.com/rodrigo-arenas/pyworkforce/subscription",
            //     icon: <AiFillEye/>
            // },
            // {
            //     name: "docs",
            //     url: "https://pyworkforce.readthedocs.io/en/stable/",
            //     icon: <ImBook/>,
            // }
        ],
        image: dataExploration,
        description: "Data Exploration of Covid-19 Dataset in SQL Server.",
        target: "_blank"
    },
    // {
    //     id: "project-1",
    //     title: "Portfolio Web",
    //     links: [
    //         {
    //             name: "repo",
    //             url: "https://github.com/rodrigo-arenas/portfolio",
    //             icon: <AiFillGithub/>
    //         },
    //         {
    //             name: "fork",
    //             url: "https://github.com/rodrigo-arenas/portfolio/fork",
    //             icon: <BiGitRepoForked/>
    //         },
    //         {
    //             name: "subscription",
    //             url: "https://github.com/rodrigo-arenas/portfolio/subscription",
    //             icon: <AiFillEye/>
    //         }
    //     ],
    //     image: portfolio,
    //     description: "Source code of my current portfolio web page as data scientist.",
    //     target: "_blank"
    // }

        {
        id: "project-1",
        title: "Exploring R Visualizations with ggplot2",
        links: [
            {
                name: "repo",
                url: "https://github.com/SohaibRaoufy/R/blob/main/download.pdf",
                icon: <AiFillGithub/>
            },
            // {
            //     name: "fork",
            //     url: "https://github.com/rodrigo-arenas/portfolio/fork",
            //     icon: <BiGitRepoForked/>
            // },
            // {
            //     name: "subscription",
            //     url: "https://github.com/rodrigo-arenas/portfolio/subscription",
            //     icon: <AiFillEye/>
            // }
        ],
        image: tidyverseImage,
        description: "These examples highlight the versatility of ggplot2 for creating insightful visualizations.",
        target: "_blank"
    },

      {
        id: "project-0",
        title: "Exploring Correlation With Python",
        links: [
            {
                name: "repo",
                url: "https://github.com/SohaibRaoufy/PortfolioProjects/blob/main/Movie%20Correlation%20Project.ipynb",
                icon: <AiFillGithub/>
            },
            // {
            //     name: "fork",
            //     url: "https://github.com/rodrigo-arenas/portfolio/fork",
            //     icon: <BiGitRepoForked/>
            // },
            // {
            //     name: "subscription",
            //     url: "https://github.com/rodrigo-arenas/portfolio/subscription",
            //     icon: <AiFillEye/>
            // }
        ],
        image: pandaImage,
        description: "Correlation Analysis with python, using pandas, seaborn, numpy, matplotlib, matplotlib libraries.",
        target: "_blank"
    }
]

export default projectConfig