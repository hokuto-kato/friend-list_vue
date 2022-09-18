<script>
import axios from 'axios'
import draggable from 'vuedraggable'

export default {
	components: {
		draggable
	},
	data() {
		return {
			friends: [],
			fontAwesomeStyle: {
				marginRight: '10px',
				position: 'relative',
				top: '2px'
			}
		}
	},
	methods: {
		addFriend(friend) {
			const newFriend = {
				id: friend.id,
				name: friend.name,
				age: friend.age,
				image: friend.image
			}
			this.friends.unshift(newFriend)
		},
		removeFriend(id) {
			console.log(id)
			this.friends = this.friends.filter((friend) => {
				return friend.id !== id
			})
		}
	},
	computed: {
		dragOptions() {
			return {
				animation: 200,
				group: 'description',
				disabled: false,
				ghostClass: 'ghost'
			}
		}
	},
	mounted() {
		axios
			.get(
				'https://randomuser.me/api/?results=5&inc=login,name,dob,picture'
			)
			.then((res) => {
				res.data.results.forEach((friend) => {
					const newFriend = {
						id: friend.login.uuid,
						name: `${friend.name.first} ${friend.name.last}`,
						age: friend.dob.age,
						image: {
							backgroundImage: `url(${friend.picture.large})`,
							backgroundSize: 'cover',
							backgroundPosition: '50% 50%'
						}
					}
					this.friends.push(newFriend)
				})
			})
			.then((err) => {
				if (err) {
					console.log(err)
				}
			})
	}
}
</script>

<template>
	<div class="antialiased text-gray-900 px-6 py-6">
		<header>
			<h1 class="text-5xl md:text-6xl font-bold mb-6">
				<font-awesome-icon
					icon="fa-solid fa-address-card"
					size="xs"
					:style="fontAwesomeStyle"
				/>
				friend list
			</h1>
		</header>
		<main>
			<user-data @add-friend="addFriend"></user-data>

			<section class="mt-16">
				<h2
					class="text-4xl font-bold leading-tight tracking-tight text-gray-900 mb-5"
				>
					output
				</h2>

				<draggable
					tag="ul"
					class="grid grid-cols-auto-fit gap-4"
					:list="friends"
					v-bind="dragOptions"
					item-key="id"
				>
					<template #item="{ element }">
						<active-user
							:id="element.id"
							:key="element.id"
							:name="element.name"
							:age="element.age"
							:image="element.image"
							@remove-friend="removeFriend"
							item-key="id"
						>
						</active-user>
					</template>
				</draggable>
			</section>
		</main>
	</div>
</template>

<style lang="sass">
body
	background-color: #f3f4f6
</style>
