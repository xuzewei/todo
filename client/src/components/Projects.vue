<template>
  <Panel title="Projects">
    <div
      class="project mt-2"
      v-for="project in projects"
      :key="project.id"
    >
      <v-layout row wrap>
        <v-flex xs9 class="text-xs-left">
          <span
            v-if="!project.isEditMode">
            {{project.title}}
          </span>
          <v-text-field
            v-if="project.isEditMode"
            :value="project.title"
            @input="setProjectTitle({
              project,
              title: $event,
            })"
          ></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-icon
            v-if="!project.isEditMode"
            @click="setEditMode(project)">
            edit
          </v-icon>
          <v-icon
            v-if="project.isEditMode"
            @click="unsetEditMode(project)">
            check
          </v-icon>
        </v-flex>
      </v-layout>
    </div>
    <v-layout row wrap class="mt-4">
      <v-flex xs8>
        <v-text-field
          placeholder="My project name..."
          @input="setNewProjectName"
          @value="newProjectName"
        ></v-text-field>
      </v-flex>
      <v-flex xs4>
        <v-btn
          @click="createProject"
          dark
          class="mt-2"
          color="green">
          <v-icon class="mr-2">add_circle</v-icon>
          Create
        </v-btn>
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  mounted() {
    this.fetchProjects();
  },
  computed: {
    ...mapState('projects', [
      'newProjectName',
      'projects',
    ]),
  },
  methods: {
    ...mapMutations('projects', [
      'setNewProjectName',
      'setEditMode',
      'unsetEditMode',
      'setProjectTitle',
    ]),
    ...mapActions('projects', [
      'createProject',
      'fetchProjects',
    ]),
  },
};
</script>

<style>
.project {
  font-size: 24px;
}
</style>
