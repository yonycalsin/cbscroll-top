/*!
 * Cb Scroll Top v1.0.2 (https://github.com/yonicb/cbscroll-top)
 * Copyright 2019 The Cb Scroll Top Authors
 * Copyright 2019 Yoni Calsin <helloyonicb@gmail.com>.
 * Licensed under MIT (https://github.com/yonicb/cbscroll-top/blob/master/LICENSE)
 */
import { AnimationScrollJs } from 'animation-scroll.js';
declare global {
   interface Window {
      CbScrollTop: any
   }
}

interface More {
   [key: string]: any
}

interface Options extends More {
   type?: "image" | "emoji"
   source?: string
   animated?: boolean
   offset?: number
   done?: Function
}

class CbScrollTop {
   public container: HTMLElement = document.createElement("cbscroll-top")
   public content: HTMLElement = document.createElement("cbscroll-top-content")
   public image: HTMLImageElement = document.createElement("img")
   public config: any
   public VERSION: string = "1.0.2"
   public AUTHOR: string = "Yoni Calsin<helloyonicb@gmail.com>"
   private status: number = 0 // 0: null, 1: show, 2: hide
   constructor(options: Options = {}) {
      this.config = {
         type: "image",
         source: "../assets/1.png",
         animated: false,
         offset: 1000,
         done: () => {
            console.log('Go to top done!');
         }
      }
      if (Object.values(options).length > 0) {
         for (const [k, v] of Object.entries(options)) {
            this.config[k] = v
         }
      }
      this.createContent()
      this.container.addEventListener("click", () => {
         new AnimationScrollJs(document.body, 1000, this.config.done)
      })
      this.listenScroll()
      window.addEventListener("scroll", this.listenScroll)
   }
   createContent() {
      const { type, source } = this.config;
      switch (type) {
         case "image":
            this.image.src = source;
            this.content.appendChild(this.image)
            break;
         case "emoji":
            this.content.textContent = source;
            break;
      }
      type && this.content.classList.add(type)
      this.container.appendChild(this.content)
      document.body.appendChild(this.container)
   }
   listenScroll = () => {
      if (this.status === 0) {
         this.container.style.display = "none"
      }
      if (this.config.animated && this.status === 1) {
         this.container.classList.add("animated")
      } else if (this.config.animated && (this.status === 2 || this.status === 0)) {
         this.container.classList.remove("animated")
      }
      if (scrollY > this.config.offset) {
         if (this.status != 1) {
            this.container.style.display = "block"
            this.container.classList.add("input")
            setTimeout(() => {
               this.container.classList.remove("input")
            }, 1100);
         }
         this.status = 1
      } else {
         if (this.status != 2) {
            this.container.classList.add("output")
            setTimeout(() => {
               this.container.classList.remove("output")
               this.container.style.display = "none"
            }, 1100);
         }
         this.status = 2
      }
   }
   setStyle = (style: More) => {
      if (style && Object.values(style).length > 0) {
         for (const [k, v] of <any>Object.entries<string | string | any>(style)) {
            this.container.style[k] = v
         }
      }
   }
}

if (typeof window != "undefined") {
   window.CbScrollTop = CbScrollTop
}
if (typeof exports !== 'undefined') {
   if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = CbScrollTop;
   }
   exports.CbScrollTop = CbScrollTop;
}
