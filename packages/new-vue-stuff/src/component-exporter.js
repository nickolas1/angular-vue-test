import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import MessageCountWrapper from './components/MessageCountWrapper';


console.log(MessageCountWrapper)
export const MessageCountWrapperElement = wrap(Vue, MessageCountWrapper);
