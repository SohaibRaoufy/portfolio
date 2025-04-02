import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {SiMedium} from "react-icons/si";
import fastapiSklearn from "../images/fastapi_sklearn.png"
import quartoImage from "../images/quarto-all.jpeg"
import SupersetImage from "../images/max-min-charts.gif"

const blogConfig = [
    {
        id: "blog-8",
        title: "The Art of Asking the Right Questions",
        links: [
            {
                name: "article",
                url: "https://medium.com/@raoufysohaib/the-art-of-asking-the-right-questions-how-i-learned-to-start-every-data-analysis-the-right-way-89b25cf0eee0",
                icon: <SiMedium/>
            }
        ],
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*7q16S8nz5lxe8AURKr7_cg.jpeg",
        description: "How I Learned to Start Every Data Analysis the Right Way.",
        target: "_blank"
    },
    {
        id: "blog-7",
        title: "Why and When to Use Quarto",
        links: [
            {
                name: "article",
                url: "https://medium.com/@raoufysohaib/why-and-when-to-use-quarto-a-practical-guide-for-data-scientists-and-researchers-b876504d9988",
                icon: <SiMedium/>
            }
        ],
        image: quartoImage,
        description: "Let's explore What is Quarto and when to use Quarto: A Practical Guide for Data Scientists and Researchers",
        target: "_blank"
    },
    {
        id: "blog-6",
        title: "Why and When to Use Apache Superset",
        links: [
            {
                name: "article",
                url: "https://medium.com/@raoufysohaib/why-and-when-to-use-apache-superset-a-practical-guide-for-data-analysts-and-organizations-a1b4a59f0430",
                icon: <SiMedium/>
            }
        ],
        image: SupersetImage,
        description: "Let's explore What is Apache Superset and when to use Apache Superset: A Practical Guide for Data Analysts and Organizations",
        target: "_blank"
    },
    // {
    //     id: "blog-5",
    //     title: "Real-time anomaly detection with Apache Kafka and Python",
    //     links: [
    //         {
    //             name: "article",
    //             url: "https://towardsdatascience.com/real-time-anomaly-detection-with-apache-kafka-and-python-3a40281c01c9",
    //             icon: <SiMedium/>
    //         },
    //         {
    //             name: "repo",
    //             url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection",
    //             icon: <AiFillGithub/>
    //         }
    //     ],
    //     image: "https://miro.medium.com/max/1400/1*Xem1rbG0Fa8DAhtez7mvsA.jpeg",
    //     description: "Learn how to make predictions over streaming data coming from Kafka using Python.",
    //     target: "_blank"
    // },
    // {
    //     id: "blog-4",
    //     title: "Serve a machine learning model using Sklearn, FastAPI, and Docker",
    //     links: [
    //         {
    //             name: "article",
    //             url: "https://medium.com/analytics-vidhya/serve-a-machine-learning-model-using-sklearn-fastapi-and-docker-85aabf96729b",
    //             icon: <SiMedium/>
    //         },
    //         {
    //             name: "repo",
    //             url: "https://github.com/rodrigo-arenas/fast-ml-deploy",
    //             icon: <AiFillGithub/>
    //         }
    //     ],
    //     image: fastapiSklearn,
    //     description: "Get your model machine learning model to production as a containerized API.",
    //     target: "_blank"
    // },
    // {
    //     id: "blog-3",
    //     title: "Are You Still Using Grid2 Search for Hyperparameters Optimization?",
    //     links: [
    //         {
    //             name: "article",
    //             url: "https://towardsdatascience.com/hyperparameters-tuning-from-Grid2-search-to-optimization-a09853e4e9b8",
    //             icon: <SiMedium/>
    //         }
    //     ],
    //     image: "https://miro.medium.com/max/1400/0*ZYC4nQw8g2dv7GCp",
    //     description: "Let's discuss the ideas behind how to search in a smart fashion the hyperparameters for your machine learning models.",
    //     target: "_blank"
    // },
    // {
    //     id: "blog-2",
    //     title: "Tune Your Scikit-learn Model Using Evolutionary Algorithms",
    //     links: [
    //         {
    //             name: "article",
    //             url: "https://towardsdatascience.com/tune-your-scikit-learn-model-using-evolutionary-algorithms-30538248ac16",
    //             icon: <SiMedium/>
    //         }
    //     ],
    //     image: "https://miro.medium.com/max/1400/1*gmNunOZ86_URtnzuOA7oNg.jpeg",
    //     description: "Scikit-learn hyperparameters tuning with evolutionary algorithms and cross-validation.",
    //     target: "_blank"
    // },
    // {
    //     id: "blog-1",
    //     title: "Manage your machine learning life cycle with MLflow in Python",
    //     links: [
    //         {
    //             name: "article",
    //             url: "https://medium.com/analytics-vidhya/manage-your-machine-learning-lifecycle-with-mlflow-in-python-d678d5f3c682",
    //             icon: <SiMedium/>
    //         },
    //         {
    //             name: "repo",
    //             url: "https://github.com/rodrigo-arenas/mlflow-basics",
    //             icon: <AiFillGithub/>
    //         }
    //     ],
    //     image: "https://miro.medium.com/max/1400/1*FhKrMpcUPeZxNsZpKNv4BA.png",
    //     description: "Model lifecycle management using mlflow",
    //     target: "_blank"
    // },
    // {
    //     id: "blog-0",
    //     title: "Workforce planning optimization using Python",
    //     links: [
    //         {
    //             name: "article",
    //             url: "https://towardsdatascience.com/workforce-planning-optimization-using-python-69af0ef9011a",
    //             icon: <SiMedium/>
    //         }
    //     ],
    //     image: "https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",
    //     description: "Learn how to find the optimal number of positions needed to manage incoming traffic.",
    //     target: "_blank"
    // }
]

export default blogConfig