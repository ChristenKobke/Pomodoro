<template>
  <div class="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
    <h1 class="text-4xl font-bold mb-6">Pomodoro Timer</h1>

    <!-- Timer Display -->
    <div class="text-6xl font-mono mb-8">
      {{ formattedTime }}
    </div>

    <!-- Controls -->
    <div class="flex gap-4">
      <button
          @click="toggleTimer"
          class="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow"
      >
        {{ isRunning ? 'Pause' : 'Start' }}
      </button>
      <button
          @click="resetTimer"
          class="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'timer',
  data() {
    return {
      totalSeconds: 25 * 60, // 25 minutes default
      remainingSeconds: 25 * 60,
      isRunning: false,
      interval: null,
    }
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.remainingSeconds / 60).toString().padStart(2, '0')
      const seconds = (this.remainingSeconds % 60).toString().padStart(2, '0')
      return `${minutes}:${seconds}`
    }
  },
  methods: {
    toggleTimer() {
      if (this.isRunning) {
        clearInterval(this.interval)
      } else {
        this.interval = setInterval(() => {
          if (this.remainingSeconds > 0) {
            this.remainingSeconds--
          } else {
            clearInterval(this.interval)
            this.isRunning = false
            alert('Pomodoro Complete! 🎉')
          }
        }, 1000)
      }
      this.isRunning = !this.isRunning
    },
    resetTimer() {
      clearInterval(this.interval)
      this.remainingSeconds = this.totalSeconds
      this.isRunning = false
    }
  },
  beforeUnmount() {
    clearInterval(this.interval)
  }
}
</script>
