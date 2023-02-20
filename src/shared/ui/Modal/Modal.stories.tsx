import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'



export default {
   title: 'shared/Modal',
   component: Modal,
   argTypes: {
      backgroundColor: { control: 'color' },
   }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />



export const Light = Template.bind({})
Light.args = {
   isOpen: true,
   children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Necessitatibus ducimus tempora distinctio illum molestias velit voluptatem sed quis, minima vel veniam modi consectetur non quidem dignissimos cupiditate inventore! Ducimus, quia molestiae amet distinctio saepe officiis laborum id animi nemo sint nam pariatur ipsum.Totam at et labore consequatur ducimus voluptatem quaerat consequuntur illo reprehenderit! Delectus, sit iste? Recusandae perspiciatis deleniti est ex autem fugit iure eligendi soluta aliquam veniam incidunt rem, qui voluptatem voluptatibus magni impedit ad temporibus.Magni commodi ab, odio libero facere adipisci illo consequatur praesentium veniam voluptatum dignissimos eligendi doloremque facilis ea error! Maxime temporibus accusamus pariatur!'
}

export const Dark = Template.bind({})
Dark.args = {
   isOpen: true,
   children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Aliquam repudiandae labore rerum architecto molestiae voluptas impedit saepe vitae fugiat.Iure labore ad quod corporis doloremque consectetur, soluta, vitae molestiae error, modi tenetur sed! Eveniet quae pariatur, officia eum perferendis cumque illum rerum.Temporibus, quo veritatis.Fugit, tenetur doloribus! Sit excepturi est quam similique, reprehenderit possimus fuga, doloremque suscipit impedit iure exercitationem ex iste itaque saepe vel ullam quibusdam.Recusandae, quasi cum dolorem architecto ducimus modi exercitationem optio nostrum vel nisi distinctio eum omnis assumenda nam necessitatibus.Dolorem dolores voluptatum cupiditate dignissimos asperiores obcaecati, sit, fugit, atque optio saepe ratione maxime?'
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
