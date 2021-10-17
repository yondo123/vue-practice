<template lang="en">
    <div v-if="node" :style="{'padding-left': `${depth * 0.5}rem`}">
            <dl class="comment-info">
                <div class="info">
                    <dt>info</dt>
                    <dd>
                        {{node.time_ago}} 
                        <router-link v-bind:to="`/user/${node.user}`">
                            {{node.user}}
                        </router-link>
                        <div class="tree-button" v-on:click="treeTrigger">
                            <button type="button"><span class="button-text">{{ expand ?  '&#91; - &#93;' :`&#91; ${node.comments_count}more.. &#93;`}}</span></button>
                        </div>
                    </dd>
                </div>
                <div class="content">
                    <dt>content</dt>
                    <dd v-html="node.content"></dd>
                </div>
            </dl>
            <hr>
            <comment-child v-for="(comments, index) in node.comments" :key="index" :node="comments" :depth="depth + 1" v-if="expand"/>
        </div>
    </div>
</template>
<script>
export default {
  name: "commentChild",
  data() {
      return {
          expand : true
      }
  },
  props: {
    depth : {
        type: Number,
        default: 0
    },
    node: null
  },
  methods: {
      treeTrigger(){
          return this.expand = !this.expand;
      }
  },
};
</script>
<style>
</style>