<template>
    <div class="card flex justify-center">
        <Dialog :visible="visible" modal :header="header" :style="{ width: '90%' }"
            @update:visible="$emit('update:visible', $event)">

            <DataTable :value="performances" tableStyle="min-width: 50rem" dataKey="id"
                filterDisplay="row">
                <template #empty> No data found. </template>
                <Column field="date" header="Date" style="min-width: 12rem">
                    <template #body="{ data }">
                        {{ data.date }}
                    </template>
                </Column>
                <Column field="time" header="Heure" style="min-width: 12rem">
                    <template #body="{ data }">
                        {{ data.time }}
                    </template>
                </Column>
                <Column field="city" header="Ville" style="min-width: 12rem">
                    <template #body="{ data }">
                        {{ data.city }}
                    </template>
                </Column>
                <Column field="venue" header="Salle" style="min-width: 12rem">
                    <template #body="{ data }">
                        {{ data.venue }}
                    </template>
                </Column>
                <Column field="ticketsSold" header="Places Vendus/Capacité Totale" style="min-width: 12rem">
                    <template #body="{ data }">
                        {{ data.ticketsSold }} / {{ data.capacity }} 
                    </template>
                </Column>
                <Column field="ticketPrice" header="Prix du Billet" style="min-width: 12rem">
                    <template #body="{ data }">
                        {{ data.ticketPrice }}$
                    </template>
                </Column>
            </DataTable>
            <AddForm />
        </Dialog>
    </div>
</template>

<script>
import AddForm from '../components/AddForm.vue';

export default {
    name: 'DetailedView',
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        displayRowDetails: {
            type: Object,
            default: null
        }
    },
    components: {
        AddForm,
    },
    computed: {
        header() {
            return this.displayRowDetails ? `${this.displayRowDetails.name} (${this.displayRowDetails.status})` : '';
        }
    },
    data() {
        return {
            performances: [],
        };
    },
    methods: {
        getPerformances(id) {
        console.log('Fetching performances for tour:', id);
        fetch('api/tours/'+id+'/performances')
            .then(response => response.json())
            .then(data => {
                this.performances = data;
                console.log('Performances fetched:', this.performances);
            })
            .catch(error => {
                console.error('Error fetching Performances:', error);
            });
        }
    },
};
</script>