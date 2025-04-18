<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
 
const router = useRouter();
 
const title = ref('')
const description = ref('')
const deadline = ref('')
const completed = ref(false)

const saveData = async () => {
    const newTask = JSON.stringify({
        title: title.value,
        description: description.value,
        deadline: Date.parse(deadline.value)/1000,
        completed: completed.value
    });

    const response = await fetch('api/task', {
        method: 'POST',
        body: newTask,
    });

   const data = await response.json()

   router.push('/')
}

 </script>
 
 
 <template>
     <h1>Buat Event Baru</h1>
        <form @submit.prevent="saveData">
            <div>
                <label>Judul Tugas</label>
                <input type="text" v-model="title">
            </div>
            <div>
                <label>Deskripsi Tugas</label>
                <input type="text" v-model="description">
            </div>
            <div>
                <label>Tenggat Waktu</label>
                <input type="datatime-local" v-model="deadline">
            </div>
            <div>
                <label>Selesai</label>
                <input type="text" v-model="completed">
            </div>

            <div><input type="submit"></div>
        </form>
 </template>