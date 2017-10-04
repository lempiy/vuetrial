<template>
    <form onsubmit="return false" class="regist-driver">
        <h1 class="driver-reg-title">Driver Registration</h1>
        <div id="app" class="reg-container">
            <div class="content-left">
                <div class="form-element">
                    <fieldset>
                        <ul>
                            <li class="flex-wrapper name">
                                <div class="flex-cell">
                                    <TextInput 
                                        :title="'First Name'" 
                                        :input="''" 
                                        :name="'first_name'"
                                        :error="''"/>
                                </div>
                                <div class="flex-cell">
                                    <TextInput 
                                        :title="'Last Name'" 
                                        :input="''" 
                                        :name="'last_name'"
                                        :error="''"/>
                                </div>
                            </li>
                            <li class="flex-wrapper contact">
                                <div class="flex-cell">
                                    <TextInput 
                                        title="Email" 
                                        input='' 
                                        error='Email is not valid'
                                        pattern='^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'
                                        name="email"/>
                                    <TextInput 
                                        title="Phone" 
                                        input='' 
                                        error='Phone number is not valid'
                                        pattern='^[0-9]{10}$'
                                        name="phone"/>
                                </div>
                                
                            </li>
                        </ul>
                    </fieldset>
                </div>
            </div>
            <div class="content-center">
            </div>
            <div class="content-right">
                <div class="form-element">
                    <fieldset>
                        <h2>Please fill your preferences</h2>
                        <ul>
                            <li class="flex-wrapper signals full">
                                <RadioPicker
                                    :options="options"
                                    :chosen="chosen"
                                    :name="'signals'"
                                    />
                            </li>
                            <li class="flex-wrapper full zero-m">
                                <div class="flex-cell">
                                   
                                </div>
                            </li>
                            <li class="flex-wrapper full zero-m">
                                <div class="flex-cell">
                                    
                                </div>
                            </li>
                            <li class="flex-wrapper full zero-m">
                                <div class="flex-cell">
                                    
                                </div>
                            </li>
                            <li class="flex-wrapper full zero-m">
                                <div class="flex-cell">
                                    
                                </div>
                            </li>
                            <li class="flex-wrapper full zero-m m-t-s">
                                
                            </li>
                            <li class="flex-wrapper full zero-m">
                                
                            </li>
                            <li class="flex-wrapper full term-usage">
                                
                            </li>
                        </ul>
                    </fieldset>
                    <fieldset>
                        <ul>
                            <li class="flex-wrapper submit">
                                
                            </li>
                        </ul>
                    </fieldset>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import TextInput from '../shared/components/TextInput.vue'
import RadioPicker from '../shared/components/RadioPicker.vue'

export default {
    name: 'regform',
    data() {
        return {
            options: [
                {
                    value: "signals_only",
                    title: "Signals only",
                },
                {
                    value: "no_signals",
                    title: "No Signals"
                },
                {
                    value: "doubles_only",
                    title: "Doubles only",
                }
            ],
            chosen: "doubles_only",
        }
    },
    components: {
        TextInput,
        RadioPicker,
    }
}
</script>

<!-- SHIT CODE COMPONENT - JUST FOR TEST -->
<style lang="sass" scoped>
.driver-reg-title
    text-align: center
    font-size: 20px
    padding-bottom: 30px
    font-weight: bol

.reg-container
    width: 90vw
    max-width: 1440px
    margin: 10px auto
    margin-bottom: 80px
    display: flex
    @media (max-width: 980px)
        margin: 10px auto
        margin-bottom: 40px
        flex-direction: column
    .content-left, .content-right
        flex-grow: 2
        flex-basis: 30%
        @media (max-width: 980px)
            flex-basis: 100%
    .content-center
        flex-grow: 2
    .content-center
        display: flex
        flex-direction: column
        align-items: center
        justify-content: space-between
        @media (max-width: 980px)
            display: none
        .divider
            height: calc(100% - 110px)
            width: 3px
            background-color: #094b88
        .photo-cell
            margin-top: -15px
            position: relative
            label
                width: 95px
                height: 95px
                border-radius: 100%
                display: flex
                justify-content: center
                align-items: center
                z-index: 1
                &.empty
                    background-color: rgb(235, 235, 235)
                    cursor: pointer
                    &:hover
                        background-color: rgb(225, 225, 225)
                &.photo
                    position: relative
                    border: 2px solid #fff
                    box-sizing: border-box
                    box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.3)
                    overflow: hidden
                    cursor: pointer
                    &:hover
                        box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.3)
                    img
                        position: absolute
                        transform: translate(-50%, -50%)
                        top: 50%
                        left: 50%
                        width: 100%
                        height: auto
                        z-index: -1
            .plus
                position: absolute
                z-index: 2
                bottom: 0px
                right: 0px
                width: 28px
                height: 28px
                border-radius: 100%
                box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.3)
                background-color: white
                &:after
                    content: ''
                    display: block
                    height: 18px
                    width: 1px
                    background-color: #000
                    position: absolute
                    z-index: 3
                    left: 50%
                    top: 50%
                    transform: translate(-50%, -50%)
                &:before
                    content: ''
                    display: block
                    height: 1px
                    width: 18px
                    background-color: #000
                    position: absolute
                    z-index: 3
                    left: 50%
                    top: 50%
                    transform: translate(-50%, -50%)
            input[type=file]
                display: none
    .content-left, .content-right
        .row-file-inputer
            width: 100%
        h1
            padding-left: 10px
            font-size: 20px
            margin-bottom: 45px
            @media (max-width: 980px)
                text-align: center
                padding-left: 0px
                margin-bottom: 25px
        h2
            text-align: center
            font-size: 20px
        .form-element
            width: 100%
            .flex-wrapper
                width: 100%
                display: flex
                flex-direction: row
                justify-content: space-between
                max-width: calc(100% - 20px)
                margin: 0 auto
                margin-bottom: 30px
                .flex-cell
                    &.upl
                        padding: 5px 0
                        padding-left: 40px
                        position: relative
                        min-height: 67px
                        justify-content: flex-start
                        img.paper
                            cursor: pointer
                            position: absolute
                            left: 0
                            top: 50%
                            transform: translateY(-50%)
                            width: 30px
                            height: 30px
                            opacity: 0.5
                            &:hover
                                opacity: 1
                        img.upl-priview
                            max-height: 67px
                            width: auto
                    .mdl-textfield, .mdl-selectfield
                        width: 100%
                        position: relative
                        .datepicker-label
                            position: absolute
                            bottom: 18px
                            right: 0px
                            color: #999
                            cursor: pointer
                            &:hover
                                color: #094b99
                    .mdl-menu__container, .mdl-menu__outline
                        width: inherit !important
                    input[type=text], select
                        width: 100%
                    &:last-of-type
                        display: flex
                        justify-content: center
                p
                    font-size: 11px
                    line-height: 2
                    text-align: justify
                    font-weight: normal
            .name
                margin-top: 10px
                margin-bottom: 0px
                .flex-cell
                    margin-left: 10px
                    &:first-of-type
                        margin-left: 0
                        flex: 1
                    &:last-of-type
                        flex: 1
            .contact
                margin-bottom: 0px
                .flex-cell
                    display: flex
                    flex-direction: column
                    justify-content: space-between
                    margin-left: 10px
                    position: relative
                    @media (max-width: 980px)
                        margin-top: 0
                    align-items: center
                    &:first-of-type
                        margin-left: 0
                        flex: 3
                    &:last-of-type
                        flex: 1
                        padding-top: 20px
                    .file-inputer
                        label
                            width: 85px
                            height: 85px
                            border-radius: 100%
                            display: flex
                            justify-content: center
                            align-items: center
                            overflow: hidden
                            &.empty
                                background-color: rgb(235, 235, 235)
                                cursor: pointer
                                &:hover
                                    background-color: rgb(225, 225, 225)
                            &.photo
                                position: relative
                                border: 2px solid #fff
                                box-sizing: border-box
                                box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.3)
                                &:hover
                                    box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.3)
                                img
                                    position: absolute
                                    transform: translate(-50%, -50%)
                                    top: 50%
                                    left: 50%
                                    width: 100%
                                    height: auto
                                    z-index: -1
                    .file-inputer
                        position: relative
                        visibility: hidden
                        @media (max-width: 980px)
                            visibility: visible
                        .plus
                            position: absolute
                            z-index: 2
                            bottom: 0px
                            right: 0px
                            width: 28px
                            height: 28px
                            border-radius: 100%
                            box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.3)
                            background-color: white
                            &:after
                                content: ''
                                display: block
                                height: 18px
                                width: 1px
                                background-color: #000
                                position: absolute
                                z-index: 3
                                left: 50%
                                top: 50%
                                transform: translate(-50%, -50%)
                            &:before
                                content: ''
                                display: block
                                height: 1px
                                width: 18px
                                background-color: #000
                                position: absolute
                                z-index: 3
                                left: 50%
                                top: 50%
                                transform: translate(-50%, -50%)
                    input[type=file]
                        display: none
            .title-label
                margin-bottom: 5px
                font-size: 14px
            .license
                margin-bottom: 0px
                .flex-cell
                    flex: 1
            .license-exp
                margin-top: 0px
                margin-bottom: 0px
                .grower
                    flex-grow: 1
                .flex-cell
                    margin-left: 10px
                    @media(max-width: 980px)
                        .mdl-textfield__label
                            font-size: 14px
                    &:first-of-type
                        margin-left: 0
            .locker
                justify-content: center
                margin-top: 40px 
                .lock
                    border: 1px solid #094b88
                    padding: 15px
                    border-radius: 100%
            .homer
                justify-content: center
                margin-top: 5px
                margin-bottom: 5px
                @media(max-width: 980px)
                    margin-top: 20px
                .home
                    border: 1px solid #094b88
                    padding: 10px
                    border-radius: 100%
            .full
                &.zero-m
                    margin-bottom: 0
                @media(max-width: 980px)
                    .mdl-switch__label
                        font-size: 12px
                .flex-cell
                    flex-grow: 1
            .post
                .selecter
                    flex-basis: 45%
                .flex-cell
                    margin-left: 10px
                    flex-grow: 1
                    &:first-of-type
                        margin-left: 0
            .signals
                padding-top: 30px
            .m-t-s
                margin-top: 45px
            .term-usage
                margin-top: 45px
                @media(max-width: 980px)
                    margin-bottom: 50px
                    .mdl-checkbox__label
                        font-size: 14px
                        text-align: center
            .submit
                justify-content: center
                margin-top: 0px
                .flex-cell
                    flex-basis: 50%
                    &:first-of-type
                        margin-right: 8px
                        flex: 1
                    &:last-of-type
                        margin-left: 8px
                        flex: 1
                    &:only-of-type
                        flex: 0.5
                button[type=submit]
                    background: none
                    height: 60px
                    line-height: 60px
                    color: #fff
                    padding: 0px
                    width: 100%
                    background-color: #094b88
                    border: none
                    cursor: pointer
                    font-weight: bold
                    transition: background-color 0.5s
                    &[disabled]
                        background-color: #999
                        cursor: auto
                        box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2)
                        &:hover
                            background-color: #999
                    &:hover
                        background-color: #094b99
                    &:focus
                        outline: none
                    &.black
                        background-color: #111
                        &:hover
                            background-color: #000
            .footer
                margin-top: -30px
                margin-right: -30px
                margin-bottom: 0
                justify-content: flex-end
                @media (max-width: 980px)
                    justify-content: center
                    margin: 0 auto
                    .flex-cell:first-of-type
                        display: none
                .flex-cell
                    display: flex
                    justify-content: center
                    align-items: center
                    img
                        max-height: 75px
                        width: auto
</style>
