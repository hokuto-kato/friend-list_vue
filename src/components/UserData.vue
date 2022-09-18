<script>
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

export default {
	emits: ['add-friend'],
	data() {
		return {
			friend: {}
		}
	},
	methods: {
		submit() {
			axios.get('https://randomuser.me/api/?inc=picture').then((res) => {
				res.data.results.forEach((friend) => {
					this.friend.image = {
						backgroundImage: `url(${friend.picture.large})`,
						backgroundSize: 'cover',
						backgroundPosition: '50% 50%'
					}
					this.friend.id = uuidv4()
					this.$emit('add-friend', this.friend)
				})
				this.friend.name = ''
				this.friend.age = ''
			})
		}
	}
}
</script>

<template>
	<section class="mt-16">
		<h2 class="text-4xl font-bold leading-tight tracking-tight text-gray-900 mb-5">input</h2>
		<form @submit.prevent="submit">
			<div class="mb-6">
				<label for="name" class="block mb-2 text-m font-medium text-gray-900">name</label>
				<input
					type="text"
					id="name"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					placeholder="John Doe"
					required=""
					v-model="friend.name"
					pattern=".*\S+.*"
				/>
			</div>
			<div class="mb-6">
				<label for="age" class="block mb-2 text-m font-medium text-gray-900">age</label>
				<input
					type="number"
					id="age"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					placeholder="0"
					required=""
					v-model="friend.age"
				/>
			</div>
			<button
				type="submit"
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-auto px-5 py-2.5 text-center"
			>
				Submit
			</button>
		</form>
	</section>
</template>

<style></style>
