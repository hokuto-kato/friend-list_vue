<script>
export default {
	props: {
		id: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		age: {
			type: Number,
			required: true
		},
		image: {
			type: Object,
			required: true
		}
	}
}
</script>

<template>
	<li :key="id">
		<div
			class="bg-white rounded-lg border border-gray-200 shadow-md cursor-grab"
		>
			<div class="flex flex-col items-center pb-4 px-4 pt-4">
				<div
					class="mb-3 w-24 h-24 rounded-full shadow-lg"
					:style="image"
				></div>
				<h5 class="mb-1 text-xl font-bold text-gray-900">{{ name }}</h5>
				<span class="text-sm text-gray-500">{{ age }} years</span>
				<div class="flex mt-4 space-x-3 md:mt-6">
					<button
						class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
						@click="$emit('remove-friend', id)"
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	</li>
</template>

<style scoped lang="sass">
.flip-list-move
	transition: transform .5s
.no-move
	transition: transform 0s
.ghost
	opacity: .5
	background: #c8ebfb
</style>
