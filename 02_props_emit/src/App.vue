<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <PBHeader v-on:popStatus="togglePopup" v-bind:popupFlag="popup"></PBHeader>
  <PBMain v-bind:popupFlag="popup" v-bind:title="title" v-bind:postMessages="postArray"></PBMain>
  <PBPopup v-bind:popupFlag="popup" v-on:sendMessage="getMessage" v-on:popStatus="togglePopup"></PBPopup>
  <PBFooter></PBFooter>
</template>

<script>
import PBHeader from './components/PBHeader.vue'
import PBMain from './components/PBMain.vue'
import PBPopup from './components/PBPopup.vue'
export default {
  name: 'App',
  data: ()=>{
    return {
      popup : false,
      title : "제목이에요~",
      postArray : []
    }
  },
  components: {
    PBHeader,
    PBMain,
    PBPopup
  },
  methods: {
    togglePopup(){
      return this.popup = !this.popup;
    },
    getMessage(userObject){
        return this.postArray.push(userObject);
    }
  },
}
</script>

<style>
@import "./assets/style.css";
body {
    margin: auto;
    width: 90%;
    max-width: 960px;
    height: 100vh;
    background-color: var(--main-color);
    display: flex;
    flex-direction: column;
}

header,
main,
footer {
    margin-top: 2rem;
}

.popup {
    opacity: 0.3;
    z-index: -1;
}

button {
    color: #fff;
    cursor: pointer;
    font-size: 1.2rem;
    background-color: var(--button-color);
    border: 0.1rem solid var(--text-color);
    border-radius: 1rem;
}

header {
    padding-bottom: 1rem;
    position: relative;
    border-bottom: 0.2rem solid var(--button-color);
}

header > a > h1 {
    font-size: 3.2rem;
    font-weight: 700;
    color: var(--text-color);
}

header > a > strong {
    font-size: 1.6rem;
    color: var(--text-color);
}

header > a > i {
    color: var(--accent-color);
}

header > button {
    position: absolute;
    bottom: 1rem;
    right: 0;
    color: #fff;
    cursor: pointer;
    font-size: 1.2rem;
    background-color: var(--button-color);
    border: 0.1rem solid var(--text-color);
    border-radius: 1rem;
}

.post-list {
    box-shadow: 0.2rem 0.2rem;
    border: 0.1rem solid var(--text-color);
    border-radius: 1.1rem;
    padding: 1rem;
    background-color: var(--list-color);
    margin-bottom: 1rem;
}

.post-list > details > summary {
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
}

.post-list > details > p {
    color: #fff;
    padding: 0.6rem;
    padding-top: 0.4rem;
    font-size: 0.8rem;
}

.post-list > .post-info {
    position: relative;
    margin-top: 0.6rem;
}

.post-list > .post-info > p {
    position: absolute;
    bottom: 0;
    right: 0;
    color: var(--accent-color);
}

main p {
    color: var(--text-color);
}

.write-wrap {
    z-index: 0;
    background-color: var(--deep-color);
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 0.1rem solid var(--border-color);
    border-radius: 1rem;
    width: 72.083333333333336%;
    height: 50%;
}

.write-wrap > textarea {
    color: var(--font-color);
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    border-color: var(--text-color);
    border-radius: 1rem;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none; /*remove the resize handle on the bottom right*/
}

.article-info input {
    border: 0.1rem solid var(--text-color);
    border-radius: 1rem;
    margin-left: 0.7rem;
}

.article-info > .fas {
    color: var(--main-color);
    margin-left: 1rem;
}
.article-info,
textarea {
    margin-bottom: 1rem;
}

.article-info,
.article-button {
    margin-top: 0.6rem;
    margin-right: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.article-button > button {
    margin-right: 1.2rem;
}

</style>
