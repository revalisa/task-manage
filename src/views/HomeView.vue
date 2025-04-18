<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

interface Task {
  id: number;
  title: string;
  description: string;
  deadline: string;
  completed: boolean;
}
const tasks = ref<Task[]>([]);
</script> 
 <template>
   <main>
     <div>Daftar Task</div>
     <div>
       <RouterLink to="/task">Buat Task</RouterLink>
     </div>
     <div>
       <ul>
         <li v-for="task in tasks" :key="task.id">
           <div>{{ task.title}}</div>
          <div> {{ task.description }}</div>
          <div> {{ task.deadline }}</div>
          <div> {{ task.completed }}</div>
         </li>
       </ul>
     </div>
   </main>
 </template>