<template>
    <div class="stepperDetails card card-small mt-3">
        <div class="card-body p-3">
            <div class="d-flex flex-row">
                <div class="d-none d-sm-inline-block align-self-center p-1">
                    <img src="../assets/stepper.svg" style="width:70px;height:90px;"/>
                </div>
                <div class="p-1 pl-3">
                    Name: <br/>
                    ID:<br/>
                    Hardware IO Pins:<br/>
                    <span v-if="stepperConfiguration.brakePin != 255">Brake settings:<br/></span>
                    Motion-Settings:<br/>
                </div>
                <div class="p-1">
                    <strong>{{stepperConfiguration.name}}</strong><br/>
                    {{stepperConfiguration.id}}<br/>

                    Step-Pin: {{stepperConfiguration.stepPin}} / Dir-Pin: {{stepperConfiguration.dirPin}}
                    <span v-if="stepperConfiguration.enablePin !=-2"> / ENABLE-Pin: {{stepperConfiguration.enablePin}}</span><br/>
                    <span v-if="stepperConfiguration.brakePin != 255"> / Brake-Pin: {{stepperConfiguration.brakePin}}</span><br/>
                    <span v-if="stepperConfiguration.brakePin != 255">engage delay: {{(stepperConfiguration.brakeEngageDelayMs == 0)? 'disabled': stepperConfiguration.brakeEngageDelayMs + ' ms'}} / release delay: {{(stepperConfiguration.brakeReleaseDelayMs == -1)? 'disabled': stepperConfiguration.brakeReleaseDelayMs + ' ms'}}<br/></span>
                    Steps/mm: {{stepperConfiguration.stepsPerMM}} / Steps/revolution: {{stepperConfiguration.stepsPerRev}}<br/>
                    Microstepping: {{stepperConfiguration.microsteppingDivisor}}

                </div>
                <div class="hover-btn">
                    <b-button variant="danger" v-on:click="$emit('delete',stepperConfiguration.id)">
                        <font-awesome-icon icon="trash"/>
                    </b-button>
                    <br/>
                    <b-button class="mt-3" variant="success" v-on:click="$emit('edit',stepperConfiguration.id)">
                        <font-awesome-icon icon="pen"/>
                    </b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {BButton} from 'bootstrap-vue';

    export default {
        name: 'StepperMotorDetails',
        props: {
            stepperConfiguration: Object,
        },
        components: {
            BButton
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hover-btn {
        position: absolute;
        right: 15px;
        display: none;
    }

    .stepperDetails:hover .hover-btn {
        display: block;
    }
</style>
