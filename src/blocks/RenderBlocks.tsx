import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { Right } from '@/blocks/Right/Component'
import { Conten } from '@/blocks/Conten/Component'
import { MainBlock } from '@/blocks/Main/Component'
import { ContactBlock } from '@/blocks/Contact/Component'
import { DownComponent } from '@/blocks/Down/Component'
import { ContactsBlocks } from '@/blocks/ContactsBlocks/Component'
import { Both } from '@/blocks/Both/Component'
import { OemBlock } from '@/blocks/Oem/Component'

// Add a shared prop type for all blocks
type BlockWithExtraProps = Page['layout'][0] & {
  disableInnerContainer?: boolean;
};

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  right: Right,
  conten: Conten,
  main: MainBlock,
  contact: ContactBlock,
  down: DownComponent,
  contactsblocks: ContactsBlocks,
  both: Both,
  oem: OemBlock,
};

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = ({ blocks }) => {

  if (!blocks?.length) return null;

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const { blockType } = block;

        if (blockType && blockType in blockComponents) {
          const Block = blockComponents[blockType];

          return (
            <div className="my-16" key={index}>
              <Block {...(block as BlockWithExtraProps)} disableInnerContainer />
            </div>
          );
        }

        return null;
      })}
    </Fragment>
  );
};
