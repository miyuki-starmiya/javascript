<template>
    <div>
        <h3>掲示板に投稿する</h3>
        <label for="name">ユーザネーム：</label>
        <input id="name" type="text" v-model="name">
        <br><br>
        <label for="comment">コメント：</label>
        <textarea id="comment" v-model="comment"></textarea>
        <h2>掲示板</h2>
        <div v-for="post in posts" :key="post.name">
            <div>ユーザ名：{{ post.fields.name.stringValue }}</div>
            <div>コメント：{{ post.fields.comment.stringValue }}</div>
            <br>
        </div>
        <br><br>
        <button @click="createComment">コメントをFirestoreにPOST</button>

    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            name: "",
            comment: "",
            posts: [],
        }
    },
    created() {
        axios.get(
            "https://firestore.googleapis.com/v1/projects/vue-demo-97e20/databases/(default)/documents/comments"
        )
        .then(response => {
            this.posts = response.data.documents
        })
    },
    methods: {
        createComment() {
            axios.post(
                "https://firestore.googleapis.com/v1/projects/vue-demo-97e20/databases/(default)/documents/comments",
                {
                    fields: {
                        name: {
                            stringValue: this.name
                        },
                        comment: {
                            stringValue: this.comment
                        },
                    }
                },
            )
            .then(response => {
                console.log(response)
            })
        },
    },
    // mounted() {
    //     this.$axios
    //         .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //         .then(response => (this.info = response))
    // },
}

</script>

<!-- カプセル化されているからよりローカルの方が優先される -->
<style>
</style>
