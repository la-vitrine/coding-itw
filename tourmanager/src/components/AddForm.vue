<template>
    <div class="card flex justify-center">
        <Toast />
        <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="grid lg:grid-cols-4 gap-4 w-full">
            <div class="flex flex-col justify-start items-center gap-4">
                <InputText name="date" type="date" placeholder="Date" class="w-full sm:w-56" fluid />
                <Message v-if="$form.date?.invalid" severity="error" size="small" variant="simple">{{ $form.date.error.message }}</Message>
                <InputText name="time" type="time" placeholder="Heure" class="w-full sm:w-56" fluid />
                <Message v-if="$form.time?.invalid" severity="error" size="small" variant="simple">{{ $form.time.error.message }}</Message>
            </div>
            
            <div class="flex flex-col justify-start items-center gap-4">
                <InputText name="city" type="text" placeholder="Ville" class="w-full sm:w-56" fluid />
                <Message v-if="$form.city?.invalid" severity="error" size="small" variant="simple">{{ $form.city.error.message }}</Message>
                <InputText name="venue" type="text" placeholder="Salle" class="w-full sm:w-56" fluid />
                <Message v-if="$form.venue?.invalid" severity="error" size="small" variant="simple">{{ $form.venue.error.message }}</Message>
            </div>
            
            <div class="flex flex-col justify-start items-center gap-4">
                <InputText name="capacity" type="number" placeholder="Capacité" class="w-full sm:w-56" fluid />
                <Message v-if="$form.capacity?.invalid" severity="error" size="small" variant="simple">{{ $form.capacity.error.message }}</Message>
                <InputText name="ticketPrice" type="number" placeholder="Prix du Billet" class="w-full sm:w-56" fluid />
                <Message v-if="$form.ticketPrice?.invalid" severity="error" size="small" variant="simple">{{ $form.ticketPrice.error.message }}</Message>
            </div>
                
            <div class="flex flex-col justify-start items-center gap-4">
                <Button type="submit" severity="primary" label="Ajouter une Performance" class="w-full sm:w-56" />
            </div>
        </Form>
    </div>
</template>

<script>
export default {
    name: 'AddForm',
    data() {
        return {
            initialValues: {
                date: '',
                time: '',
                city: '',
                venue: '',
                ticketsSold: '',
                capacity: '',
                ticketPrice: ''
            }
        };
    },
    methods: {
        resolver: ({ values }) => {
            const errors = { username: [], date: [], time: [], city: [], venue: [], ticketsSold: [], capacity: [], ticketPrice: [] };

            if (!values.username) {
                errors.username.push({ type: 'required', message: 'Le nom d\'utilisateur est requis.' });
            }

            if (!values.date) {
                errors.date.push({ type: 'required', message: 'La date est requise.' });
            }

            if (!values.time) {
                errors.time.push({ type: 'required', message: 'L\'heure est requise.' });
            }

            if (!values.city) {
                errors.city.push({ type: 'required', message: 'La ville est requise.' });
            }

            if (!values.venue) {
                errors.venue.push({ type: 'required', message: 'La salle est requise.' });
            }

            if (!values.ticketsSold) {
                errors.ticketsSold.push({ type: 'required', message: 'Le nombre de billets vendus est requis.' });
            }

            if (!values.capacity) {
                errors.capacity.push({ type: 'required', message: 'La capacité est requise.' });
            }

            if (!values.ticketPrice) {
                errors.ticketPrice.push({ type: 'required', message: 'Le prix du billet est requis.' });
            }

            if (values.ticketPrice < 0) {
                errors.ticketPrice.push({ type: 'invalid', message: 'Le prix du billet ne peut pas être négatif.' });
            }

            if (values.capacity < 0) {
                errors.capacity.push({ type: 'invalid', message: 'La capacité ne peut pas être négative.' });
            }

            return {
                values,
                errors
            };
        },
        onFormSubmit({ valid }) {
            if (valid) {
                // TODO: send data to backend api
                this.$toast.add({ severity: 'success', summary: 'Performance ajoutée.', life: 3000 });
                this.$emit('update:visible', false);
            }
            else {
                this.$toast.add({ severity: 'error', summary:  this.$form.capacity.error.message, life: 3000 });
            }
        }
    }
};
</script>