<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
                <template #title>{{ dashboardStats.totalPerformances }}</template>
                <template #content>
                    <p class="m-0">Nombre total de représentations</p>
                </template>
            </Card>
            <Card>
                <template #title>{{ dashboardStats.totalRevenue }}$</template>
                <template #content>
                    <p class="m-0">Revenus cumulés</p>
                </template>
            </Card>
            <Card>
                <template #title>{{ dashboardStats.averageFillRate }}%</template>
                <template #content>
                    <p class="m-0">Taux de remplissage moyen</p>
                </template>
            </Card>
        </div>
        <br>
        <DataTable :value="tours" tableStyle="min-width: 50rem" v-model:filters="filters" dataKey="id"
            filterDisplay="row" @row-click="onRowClick">
            <template #empty> No data found. </template>
                <Column field="name" header="Titre du spectacle" style="min-width: 12rem" :showFilterMenu="false">
                    <template #body="{ data }">
                        {{ data.name }}
                    </template>
                    <template #filter="{ filterModel, filterCallback }">
                        <InputText v-model="filterModel.value" type="text" @input="filterCallback()"
                            placeholder="Recherche" />
                    </template>
                </Column>
            <Column field="status" header="Statut" style="min-width: 12rem" :showFilterMenu="false">
                <template #body="{ data }">
                    {{ data.status }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <Select v-model="filterModel.value" @change="filterCallback()" :options="statuses"
                        placeholder="Sélectionnez-en un" style="min-width: 12rem" :showClear="true">
                    </Select>
                </template>
            </Column>
            <Column field="totalPerformances" header="Nombre de représentations" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.totalPerformances }}
                </template>
            </Column>
            <Column field="totalRevenue" header="Revenus totaux" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.totalRevenue }}$
                </template>
            </Column>
            <Column field="averageFillRate" header="Taux de remplissage moyen" style="min-width: 12rem">
                <template #body="{ data }">
                    <ProgressBar :value="data.averageFillRate"></ProgressBar>
                </template>
            </Column>
        </DataTable>
        <div>
            <DetailedView ref="detailView" :visible="visible"
                :displayRowDetails="displayRowDetails"
                @update:visible="visible = $event"/>
        </div>
    </div>
</template>

<script>
import { FilterMatchMode } from '@primevue/core/api';

export default {
    name: 'App',
    data() {
        return {
            tours: [],
            dashboardStats: {
                totalPerformances: 0,
                totalRevenue: 0,
                averageFillRate: 0,
            },
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                name: { value: null, matchMode: FilterMatchMode.CONTAINS },
                status: { value: null, matchMode: FilterMatchMode.EQUALS },
            },
            statuses: ['En cours', 'Planifiée', 'Terminée', 'Annulée'],
            visible: false,
            displayRowDetails: null,
        }
    },
    mounted() {
        fetch('api/tours')
            .then(response => response.json())
            .then(data => {
                this.tours = data;
            })
            .catch(error => {
                console.error('Error fetching tours:', error);
            });

        fetch('api/dashboard/')
            .then(response => response.json())
            .then(data => {
                this.dashboardStats = data;
            })
            .catch(error => {
                console.error('Error fetching dashboard stats:', error);
            });
    },
    methods: {
        onRowClick(event) {
            this.visible = true;
            this.displayRowDetails = event.data;
            this.$refs.detailView.getPerformances(event.data.id);
        }
    },
}
</script>

<style></style>
