/**
 *
 */

export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        closeOnClickModal: Boolean,
        reservePositionOnClose: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            show: false,
            fullScreen: false
        }
    },
    methods: {
        closed() {
            if (!this.reservePositionOnClose && this.$refs.dialog) {
                const dialog = this.$refs.dialog.$refs.dialog
                dialog.style.top = 'unset'
                dialog.style.left = 'unset'
            }
            this.$emit('closed')
        },
        close() {
            this.show = false
        }

    },
    watch: {
        visible: {
            immediate: true,
            handler(newVal) {
                this.show = newVal
            }
        },
        show(newVal) {
            if (newVal !== this.visible) {
                this.$emit('update:visible', newVal)
            }
            if (!newVal) {
                this.$emit('close')
            }
        }
    },
    beforeDestroy() {
        if (this.show) {
            this.close()
        }
    }
}
