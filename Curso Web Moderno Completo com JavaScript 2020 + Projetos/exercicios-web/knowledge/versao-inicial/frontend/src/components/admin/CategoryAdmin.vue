<template>
    <div class="category-admin">
        <b-form>
            <input id="category-id" type="hidden" v-model="category.id">
            <b-form-group label="Nome:" label-for="category-name">
                <b-form-input id="category-name" type="text" v-model="category.name"
                    required :readonly="mode === 'remove'" placeholder="Informe o Nome da Categoria...">
                </b-form-input>
            </b-form-group>
            <b-form-group label="Categoria Pai:" label-for="category-parentId">
                <b-form-select v-if="mode === 'save'"
                    id="category-parentId"
                    :options="categories" v-model="category.parentId" />
                <b-form-input v-else
                    id="category-parentId" type="text"
                    v-model="category.path"
                    readonly />
            </b-form-group>
            <b-button v-if="mode === 'save'" @click="save" variant="primary" class="mr-2">Salvar</b-button>
            <b-button v-if="mode === 'remove'" @click="remove" variant="danger" class="mr-2">Excluir</b-button>
            <b-button @click="reset">Cancelar</b-button>
        </b-form>
        <hr>
        <b-table hover striped :items="categories" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button @click="loadCategory(data.item)" variant="warning" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button @click="loadCategory(data.item,'remove')" variant="danger" >
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'

export default {
    name:"CategoryAdmin",
    data: function(){
        return{
            mode: 'save',
            category: {},
            categories: [],
            fields: [
                { key: 'id', label: 'Código', sortable: true },
                { key: 'name', label: 'Nome', sortable: true },
                { key: 'path', label: 'Caminho', sortable: true },
                { key: 'actions', label: 'Ações' }
            ]
        }
    },
    methods: {
        loadCategories(){
            const url = `${baseApiUrl}/categories`
            axios.get(url).then(res => {
                //this.categories = res.data
                this.categories = res.data.map(category => {
                    return { ...category, value: category.id, text: category.path }
                })
            })
        },
        save(){
            const method = this.category.id ? 'put' : 'post'
            const id = this.category.id ? `/${this.category.id}` : ''
            axios[method](`${baseApiUrl}/categories${id}`,this.category)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        remove(){
            const id = this.category.id
            axios.delete(`${baseApiUrl}/categories/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        reset(){
            this.mode = 'save'
            this.category = {}
            this.loadCategories()
        },
        loadCategory(category, mode = 'save'){
            this.category = {...category}
            this.mode = mode
        },
    },
    mounted(){
        this.loadCategories()
    }
}
</script>

<style>

</style>