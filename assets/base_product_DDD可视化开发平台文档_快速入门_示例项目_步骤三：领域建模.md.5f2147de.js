import{_ as a,o as e,c as t,S as o}from"./chunks/framework.a3dd33a8.js";const l="/doc/assets/1702199265314.7239bdc6.png",i="/doc/assets/1702199299683.bf0f85c3.png",r="/doc/assets/1702199320462.006dba36.png",s="/doc/assets/1702199955797.527c8749.png",c="/doc/assets/1702199968098.6e53b29f.png",n="/doc/assets/1702199989242.8bcaf9d6.png",h="/doc/assets/1702200100855.7cd6ea51.png",p="/doc/assets/1702199778632.c5673622.png",d="/doc/assets/1702199811877.59362419.png",u="/doc/assets/1702199819784.35193afc.png",T=JSON.parse('{"title":"领域建模","description":"","frontmatter":{},"headers":[],"relativePath":"base/product/DDD可视化开发平台文档/快速入门/示例项目/步骤三：领域建模.md","filePath":"base/product/DDD可视化开发平台文档/快速入门/示例项目/步骤三：领域建模.md","lastUpdated":1706585121000}'),_={name:"base/product/DDD可视化开发平台文档/快速入门/示例项目/步骤三：领域建模.md"},b=o('<h1 id="领域建模" tabindex="-1">领域建模 <a class="header-anchor" href="#领域建模" aria-label="Permalink to &quot;领域建模&quot;">​</a></h1><p>本文描述系统架构师创建反映业务领域的概念模型，与领域专家合作以确保模型准确反映业务实体和关系，如何构建领域模型，对具体的业务场景进行架构设计</p><h2 id="操作步骤" tabindex="-1">操作步骤 <a class="header-anchor" href="#操作步骤" aria-label="Permalink to &quot;操作步骤&quot;">​</a></h2><ul><li>需求资料分析与记录</li><li>产品愿景</li><li>统一语言</li><li>领域模型</li><li>查询模型</li><li>数据模型</li><li>对象结构映射</li></ul><h2 id="需求资料分析与记录" tabindex="-1">需求资料分析与记录 <a class="header-anchor" href="#需求资料分析与记录" aria-label="Permalink to &quot;需求资料分析与记录&quot;">​</a></h2><blockquote><p>描述：收集、整理、记录用户需求和系统功能需求的文档，它对于软件开发过程起着指导、衡量和验证作用，以及软件设计的思路，解决方案等信息</p></blockquote><p>详情请参见：<a href="./../../操作指南/业务建模平台/业务域建模/需求文档.html">需求资料</a></p><p>具体信息的记录，按实际情况而定， 如请假系统中，记录了请假的用户故事的用例分析</p><p><img src="'+l+'" alt="1702199265314"></p><h2 id="产品愿景" tabindex="-1">产品愿景 <a class="header-anchor" href="#产品愿景" aria-label="Permalink to &quot;产品愿景&quot;">​</a></h2><blockquote><p>描述：产品愿景是对于产品发展方向和目标的总体概述，它阐述了产品应该是什么、为什么存在、为谁服务、带来什么价值。</p></blockquote><p><img src="'+i+'" alt="1702199299683"></p><h2 id="统一语言" tabindex="-1">统一语言 <a class="header-anchor" href="#统一语言" aria-label="Permalink to &quot;统一语言&quot;">​</a></h2><blockquote><p>描述：为了协调团队成员（包括开发人员、客户、领域专家等）对于业务领域的理解而共同制定的该领域内的术语和表达方式；</p></blockquote><p><img src="'+r+'" alt="1702199320462"></p><h2 id="领域模型" tabindex="-1">领域模型 <a class="header-anchor" href="#领域模型" aria-label="Permalink to &quot;领域模型&quot;">​</a></h2><blockquote><p>描述：为了协调团队成员（包括开发人员、测试、领域专家等）对于业务领域的理解而共同制定的该领域内的模型； 它描述了当前业务领域提供哪些业务原子能力；</p></blockquote><p>详细步骤如：</p><ul><li>分析场景过程的全生命周期流程， 列出关键节点，作为命令的方式显示（抽象能力接口）</li><li>对每一个关键节点进行分析，分析规则以及约束点</li><li>基于以上的规则和约束， 推断出 需要输入的参数，作为命令的参数</li><li>推断需要实现以上的规则和约束，需要什么样的数据结构和服务</li><li>设计承载以上数据结构的聚合根</li><li>拆分实体和值对象，枚举</li></ul><h3 id="分析场景过程的全生命周期流程-列出关键节点-作为命令的方式显示-抽象能力接口" tabindex="-1">分析场景过程的全生命周期流程， 列出关键节点，作为命令的方式显示（抽象能力接口） <a class="header-anchor" href="#分析场景过程的全生命周期流程-列出关键节点-作为命令的方式显示-抽象能力接口" aria-label="Permalink to &quot;分析场景过程的全生命周期流程， 列出关键节点，作为命令的方式显示（抽象能力接口）&quot;">​</a></h3><p><img src="'+s+'" alt="1702199955797"></p><h3 id="对每一个关键节点进行分析-分析规则以及约束点" tabindex="-1">对每一个关键节点进行分析，分析规则以及约束点 <a class="header-anchor" href="#对每一个关键节点进行分析-分析规则以及约束点" aria-label="Permalink to &quot;对每一个关键节点进行分析，分析规则以及约束点&quot;">​</a></h3><p><img src="'+c+'" alt="1702199968098"></p><h3 id="基于以上的规则和约束-推断出-需要输入的参数-作为命令的参数" tabindex="-1">基于以上的规则和约束， 推断出 需要输入的参数，作为命令的参数 <a class="header-anchor" href="#基于以上的规则和约束-推断出-需要输入的参数-作为命令的参数" aria-label="Permalink to &quot;基于以上的规则和约束， 推断出 需要输入的参数，作为命令的参数&quot;">​</a></h3><p><img src="'+n+'" alt="1702199989242"></p><h3 id="推断需要实现以上的规则和约束-需要什么样的数据结构和服务" tabindex="-1">推断需要实现以上的规则和约束，需要什么样的数据结构和服务 <a class="header-anchor" href="#推断需要实现以上的规则和约束-需要什么样的数据结构和服务" aria-label="Permalink to &quot;推断需要实现以上的规则和约束，需要什么样的数据结构和服务&quot;">​</a></h3><h3 id="设计承载以上数据结构的聚合根" tabindex="-1">设计承载以上数据结构的聚合根 <a class="header-anchor" href="#设计承载以上数据结构的聚合根" aria-label="Permalink to &quot;设计承载以上数据结构的聚合根&quot;">​</a></h3><h3 id="拆分实体和值对象-枚举" tabindex="-1">拆分实体和值对象，枚举 <a class="header-anchor" href="#拆分实体和值对象-枚举" aria-label="Permalink to &quot;拆分实体和值对象，枚举&quot;">​</a></h3><p><img src="'+h+'" alt="1702200100855"></p><h2 id="查询模型" tabindex="-1">查询模型 <a class="header-anchor" href="#查询模型" aria-label="Permalink to &quot;查询模型&quot;">​</a></h2><blockquote><p>描述：描述当前业务领域下包含的查询原子能力，对应一个查询器；</p></blockquote><p>查询器，可应用于，对外接口的展示，UI 的显示等</p><p><img src="'+p+'" alt="1702199778632"></p><h2 id="数据模型" tabindex="-1">数据模型 <a class="header-anchor" href="#数据模型" aria-label="Permalink to &quot;数据模型&quot;">​</a></h2><blockquote><p>描述：数据模型即数据存储模型，是数据的最终存储结构；提高系统的数据质量、性能和可维护性；</p></blockquote><p><img src="'+d+'" alt="1702199811877"></p><h2 id="对象结构映射" tabindex="-1">对象结构映射 <a class="header-anchor" href="#对象结构映射" aria-label="Permalink to &quot;对象结构映射&quot;">​</a></h2><blockquote><p>描述：描述当前业务领域下实体对象之间的字段映射关系；对应代码中的Convert转换器；</p></blockquote><p><img src="'+u+'" alt="1702199819784"></p>',39),m=[b];function q(k,f,g,P,x,D){return e(),t("div",null,m)}const $=a(_,[["render",q]]);export{T as __pageData,$ as default};
