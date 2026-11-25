import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>示例同学</h1>
        <p>正在学习 AI 协作开发。</p>
        <a href="#projects" className="btn">查看项目</a>

        <section id="education">
          <h2>教育背景</h2>
          <div className="education-item">
            <h3>亚利桑那州立大学 | 数学科学 | 博士</h3>
            <p><strong>研究方向：</strong>机器学习理论、大模型数学基础、计算机视觉几何建模</p>
            <p><strong>主要工作：</strong>围绕高维数据表征、深度学习收敛性开展理论研究，发表多篇学术会议论文；参与实验室视觉‑语言多模态模型预研工作。</p>
          </div>

          <div className="education-item">
            <h3>哈尔滨工业大学 | 软件工程 | 硕士</h3>
            <p><strong>研究方向：</strong>计算机视觉、深度学习工程化落地</p>
            <p><strong>主修课程：</strong>高级人工智能、计算机视觉、大规模软件工程、分布式系统</p>
            <p><strong>实践：</strong>完成图像目标检测系统毕业设计，参与校内AI算法平台开发；掌握模型训练调优、工程部署全流程。</p>
          </div>

          <div className="education-item">
            <h3>深圳大学 | 计算机科学 | 本科</h3>
            <p><strong>主修课程：</strong>数据结构与算法、操作系统、计算机网络、数据库、C++/Python程序设计</p>
            <p><strong>能力基础：</strong>夯实计算机底层基础，参与校内软件开发竞赛，熟悉常用算法与软件开发流程。</p>
          </div>
        </section>

        <section id="projects">
          <h2>我的项目</h2>
          <div className="project-card">
            <h3>学习笔记</h3>
            <p>记录课程练习</p>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;