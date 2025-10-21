import React, { useState, useEffect } from "react";

import {

  ChevronRight,

  Calendar,

  Tag,

  Menu,

  X,

  ChevronDown,

} from "lucide-react";



import dimitriy1 from "./images/dimitriy_1.jpeg";

import suhbat1 from "./images/suhbat_1.jpeg";

import apple from "./images/apple.jpeg";

import tum from "./images/tum.jpeg";

import ib from "./images/ib.jpeg";

import teacher from "./images/teacher.jpeg";

import shuhrat from "./images/shuhrat.jpeg";

import baa from "./images/baa.jpeg";

import maab from "./images/maab.jpeg";

import eyuf from "./images/eyuf.jpeg";

import bristol from "./images/bristol.jpeg";



const imageMap = {

  "dimitriy_1.jpeg": dimitriy1,

  "suhbat_1.jpeg": suhbat1,

  "apple.jpeg": apple,

  "tum.jpeg": tum,

  "ib.jpeg": ib,

  "teacher.jpeg": teacher,

  "shuhrat.jpeg": shuhrat,

  "baa.jpeg": baa,

  "maab.jpeg": maab,

  "eyuf.jpeg": eyuf,

  "bristol.jpeg": bristol,

};



export default function News() {

  const [newsData, setNewsData] = useState(null);

  const [selectedTopic, setSelectedTopic] = useState(null);

  const [selectedNews, setSelectedNews] = useState(null);

  const [loading, setLoading] = useState(true);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [error, setError] = useState(null);



  useEffect(() => {

    fetch("/news/news-data.json")

      .then((res) => {

        if (!res.ok) {

          throw new Error("Network response was not ok");

        }

        return res.json();

      })

      .then((data) => {

        setNewsData(data);

        console.log("Ishladi");

        setLoading(false);

      })

      .catch((err) => {

        console.error("Error loading news data:", err);

        setError(

          "Failed to load news data. Please check the file or server response."

        );

        setLoading(false);

      });

  }, []);



  if (loading) {

    return (

      <div className="min-h-screen bg-gray-50 flex items-center justify-center">

        <div className="text-gray-600">Loading...</div>

      </div>

    );

  }



  if (error || !newsData) {

    return (

      <div className="min-h-screen bg-gray-50 flex items-center justify-center">

        <div className="text-red-600">{error || "No data available."}</div>

      </div>

    );

  }



  const getNewsCountForTopic = (topicId) => {

    return newsData.news.filter((article) => article.topics.includes(topicId))

      .length;

  };



  const filteredNews = selectedTopic

    ? newsData.news.filter((article) => article.topics.includes(selectedTopic))

    : newsData.news;



  if (selectedNews) {

    return (

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

        <div className="max-w-4xl mx-auto px-6 py-12">

          <button

            onClick={() => setSelectedNews(null)}

            className="mb-8 text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors group"

          >

            <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />

            Orqaga qaytish

          </button>



          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-2"></div>



            <div className="p-12">

              <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">

                {selectedNews.title}

              </h1>



              <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">

                <div className="flex items-center gap-2">

                  <Calendar className="w-5 h-5 text-blue-600" />

                  <span>{selectedNews.date}</span>

                </div>

                <div className="flex items-center gap-2">

                  <Tag className="w-5 h-5 text-blue-600" />

                  <div className="flex gap-2 flex-wrap">

                    {selectedNews.topics.map((topicId) => {

                      const topic = newsData.topics.find(

                        (t) => t.id === topicId

                      );

                      return topic ? (

                        <span

                          key={topicId}

                          className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full"

                        >

                          {topic.name}

                        </span>

                      ) : null;

                    })}

                  </div>

                </div>

              </div>



              {/* Image Section */}

              {selectedNews.photo && imageMap[selectedNews.photo] ? (

                <div className="mb-8">

                  <img

                    src={imageMap[selectedNews.photo]}

                    alt={selectedNews.title}

                    className="w-full max-w-md mx-auto h-auto rounded-lg shadow-md object-cover"

                  />

                </div>

              ) : (

                selectedNews.photo && (

                  <div className="mb-8 text-red-600 text-center">

                    Image not found for {selectedNews.photo}

                  </div>

                )

              )}



              <div className="prose prose-lg max-w-none">

                {selectedNews.content.split("\n").map((paragraph, idx) => (

                  <p key={idx} className="mb-4 text-gray-700 leading-relaxed">

                    {paragraph}

                  </p>

                ))}

              </div>

            </div>

          </article>

        </div>

      </div>

    );

  }



  const getSelectedTopicName = () => {

    if (!selectedTopic) return "Barcha yangiliklar";

    const topic = newsData.topics.find((t) => t.id === selectedTopic);

    return topic ? topic.name : "Barcha yangiliklar";

  };



  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      <div className="flex flex-col lg:flex-row">

        {/* Sidebar */}

        <aside className="hidden lg:block w-80 bg-white shadow-xl min-h-screen sticky top-0 overflow-y-auto">

          <div className="p-8">

            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">

              Yangiliklar

            </h2>



            <button

              onClick={() => setSelectedTopic(null)}

              className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-all duration-200 flex items-center justify-between group ${

                selectedTopic === null

                  ? "bg-blue-600 text-white shadow-lg"

                  : "hover:bg-gray-100 text-gray-700"

              }`}

            >

              <span className="font-medium">Barcha yangiliklar</span>

              <span

                className={`text-sm px-2 py-1 rounded-full ${

                  selectedTopic === null

                    ? "bg-blue-500 text-white"

                    : "bg-gray-200 text-gray-600 group-hover:bg-gray-300"

                }`}

              >

                {newsData.news.length}

              </span>

            </button>



            <div className="space-y-2 mt-4">

              {newsData.topics.map((topic) => {

                const count = getNewsCountForTopic(topic.id);

                if (count === 0) return null;



                return (

                  <button

                    key={topic.id}

                    onClick={() => setSelectedTopic(topic.id)}

                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${

                      selectedTopic === topic.id

                        ? "bg-blue-600 text-white shadow-lg scale-105"

                        : "hover:bg-gray-100 text-gray-700 hover:scale-102"

                    }`}

                  >

                    <span className="font-medium text-sm">{topic.name}</span>

                    <span

                      className={`text-sm px-2 py-1 rounded-full transition-colors ${

                        selectedTopic === topic.id

                          ? "bg-blue-500 text-white"

                          : "bg-gray-200 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-700"

                      }`}

                    >

                      {count}

                    </span>

                  </button>

                );

              })}

            </div>

          </div>

        </aside>



        {/* Main Content */}

        <main className="flex-1 p-4 sm:p-8 lg:p-12">

          <div className="max-w-6xl mx-auto">

            <div className="flex items-center justify-between mb-8 lg:mb-12">

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">

                Yangiliklar va xabarlar

              </h1>



              <button

                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}

                className="lg:hidden bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow"

              >

                {isMobileMenuOpen ? (

                  <X className="w-6 h-6" />

                ) : (

                  <Menu className="w-6 h-6" />

                )}

              </button>

            </div>



            {isMobileMenuOpen && (

              <div className="lg:hidden mb-8 bg-white rounded-xl shadow-xl p-4 animate-slideDown">

                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">

                  Темы новостей

                </h2>



                <button

                  onClick={() => {

                    setSelectedTopic(null);

                    setIsMobileMenuOpen(false);

                  }}

                  className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-all duration-200 flex items-center justify-between group ${

                    selectedTopic === null

                      ? "bg-blue-600 text-white shadow-lg"

                      : "hover:bg-gray-100 text-gray-700"

                  }`}

                >

                  <span className="font-medium">Barcha yangiliklar</span>

                  <span

                    className={`text-sm px-2 py-1 rounded-full ${

                      selectedTopic === null

                        ? "bg-blue-500 text-white"

                        : "bg-gray-200 text-gray-600 group-hover:bg-gray-300"

                    }`}

                  >

                    {newsData.news.length}

                  </span>

                </button>



                <div className="space-y-2 mt-4 max-h-96 overflow-y-auto">

                  {newsData.topics.map((topic) => {

                    const count = getNewsCountForTopic(topic.id);

                    if (count === 0) return null;



                    return (

                      <button

                        key={topic.id}

                        onClick={() => {

                          setSelectedTopic(topic.id);

                          setIsMobileMenuOpen(false);

                        }}

                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${

                          selectedTopic === topic.id

                            ? "bg-blue-600 text-white shadow-lg"

                            : "hover:bg-gray-100 text-gray-700"

                        }`}

                      >

                        <span className="font-medium text-sm">

                          {topic.name}

                        </span>

                        <span

                          className={`text-sm px-2 py-1 rounded-full transition-colors ${

                            selectedTopic === topic.id

                              ? "bg-blue-500 text-white"

                              : "bg-gray-200 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-700"

                          }`}

                        >

                          {count}

                        </span>

                      </button>

                    );

                  })}

                </div>

              </div>

            )}



            <div className="lg:hidden mb-6">

              <div className="bg-white rounded-lg shadow-md px-4 py-3 flex items-center justify-between">

                <span className="text-gray-700 font-medium">

                  {getSelectedTopicName()}

                </span>

                <ChevronDown className="w-5 h-5 text-gray-400" />

              </div>

            </div>



            {/* News Cards */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {filteredNews.map((article, index) => (

                <article

                  key={article.id}

                  onClick={() => setSelectedNews(article)}

                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-2"

                  style={{

                    animationDelay: `${index * 50}ms`,

                    animation: "fadeInUp 0.5s ease-out forwards",

                    opacity: 0,

                  }}

                >

                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 transform rotate-45 translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-500"></div>



                  <div className="p-8 relative">

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">

                      <Calendar className="w-4 h-4" />

                      <span>{article.date}</span>

                    </div>



                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors leading-tight">

                      {article.title}

                    </h2>



                    <p className="text-gray-600 mb-6 leading-relaxed">

                      {article.excerpt}

                    </p>



                    <div className="flex flex-wrap gap-2">

                      {article.topics.map((topicId) => {

                        const topic = newsData.topics.find(

                          (t) => t.id === topicId

                        );

                        return topic ? (

                          <span

                            key={topicId}

                            className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium"

                          >

                            # {topic.name.toLowerCase()}

                          </span>

                        ) : null;

                      })}

                    </div>



                    <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">

                      <span>Davomini o'qish</span>

                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

                    </div>

                  </div>

                </article>

              ))}

            </div>



            {filteredNews.length === 0 && (

              <div className="text-center py-16">

                <p className="text-gray-500 text-lg">

                  Bu kategoriya bo'yicha yangiliklar mavjud emas

                </p>

              </div>

            )}

          </div>

        </main>

      </div>



      {/* Animations */}

      <style>{`

        @keyframes fadeInUp {

          from {

            opacity: 0;

            transform: translateY(30px);

          }

          to {

            opacity: 1;

            transform: translateY(0);

          }

        }

        @keyframes slideDown {

          from {

            opacity: 0;

            transform: translateY(-10px);

          }

          to {

            opacity: 1;

            transform: translateY(0);

          }

        }

        .animate-slideDown {

          animation: slideDown 0.3s ease-out;

        }

      `}</style>

    </div>

  );

}

