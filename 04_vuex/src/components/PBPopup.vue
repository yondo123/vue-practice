<template>
        <section class="write-wrap" v-bind:class="{hide : !this.$store.state.popupFlag}">
            <div class="article-info">
                <i class="fas fa-user"></i>
                <input type="text" name="author" id="userId" v-model="id" v-on:keyup="saveId" placeholder="your id" />
                <label for="userId" class="hide">User Id</label>
                <i class="fas fa-key"></i>
                <input type="password" name="author" id="userPassword" placeholder="your password.."  v-on:keyup="savePassword"/>
                <label for="userPassword" class="hide">User Password</label>
            </div>
            <textarea name="review" id="review-area" cols="15" rows="10" v-model="message"> </textarea>
            <div class="article-button">
                <button type="button" class="write" v-on:click="sendMessage(this.constructMessage())">send</button>
                <button type="button" class="cancel" v-on:click="togglePopup">cancel</button>
            </div>
        </section>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
    data() {
        return {
            checkbox : [],
            text : {},
            id : "",
            message : ""
        }
    },
    
    methods: {
        ...mapMutations({
            sendMessage : 'setBoardList',
            togglePopup : 'offPopup'
        }),
        
        constructMessage: function () {
            return {
                date : new Date().toISOString().substr(0, 10).replace(/-/g, ''),
                id : this.id,
                message : this.message
            }
        },
    }
}
</script>

<style>

</style>