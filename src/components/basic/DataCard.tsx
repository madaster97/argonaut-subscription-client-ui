import * as React from 'react';

import { 
  Card,
  H5, H6, 
  Icon,
  Intent,
  Spinner,
  Button,
  HTMLSelect,
} from '@blueprintjs/core';

import {IconNames} from '@blueprintjs/icons';
import { DataCardInfo } from '../../models/DataCardInfo';
import { ContentPaneProps } from '../../models/ContentPaneProps';
import { SingleRequestData } from '../../models/RequestData';
import RequestDataPanel from './RequestDataPanel';
import { DataCardStatus } from '../../models/DataCardStatus';

export interface DataCardProps {
  info: DataCardInfo,
  status: DataCardStatus
  data: SingleRequestData[],
  paneProps: ContentPaneProps,
  children?: React.ReactNode
}

export default function DataCard(props: DataCardProps) {

  const [showContent, setShowContent] = React.useState<boolean>(true);
  const [selectedDataIndex, setSelectedDataIndex] = React.useState<number>(-1);

  /** Function to toggle show/hide of this card's content */
  function handleToggleCardContentClick() {
    setShowContent(!showContent);
  }

  /** Function to get an appropriate icon for this card */
  function iconForCard() {
    if (props.status.busy) {
      return(<Spinner size={Spinner.SIZE_SMALL} />);
    }
    if (!props.info.stepNumber) {
      return(<Icon icon={IconNames.MINUS} iconSize={Icon.SIZE_LARGE} />);
    }
    if (props.status.complete) {
      return(<Icon icon={IconNames.TICK} intent={Intent.SUCCESS} iconSize={Icon.SIZE_LARGE} />);
    }
    if (props.status.available) {
      return(<Icon icon={IconNames.ARROW_RIGHT} intent={Intent.PRIMARY} iconSize={Icon.SIZE_LARGE} />);
    }
    return(<Icon icon={IconNames.DISABLE} intent={Intent.WARNING} iconSize={Icon.SIZE_STANDARD} />);
  }

  /** Process HTML events for the data index select box */
	function handleDataIndexChange(event: React.FormEvent<HTMLSelectElement>) {
		setSelectedDataIndex(parseInt(event.currentTarget.value));
  }

  // **** return our component ****

  return (
    <Card key={props.info.id}>
      <Button
        onClick={handleToggleCardContentClick}
        minimal={true}
        style={{float: 'right'}}
        icon={showContent ? IconNames.CHEVRON_DOWN : IconNames.CHEVRON_RIGHT}
        />
      <div style={{float:'left', width: '20px', marginLeft: '5px', marginRight: '10px'}}>
        {iconForCard()}
      </div>
      <H5>{props.info.optional ? '(Optional) ':''}{props.info.heading}
        { ((showContent) && (props.data.length > 1)) &&
        <HTMLSelect
          id='index-selector'
          value={selectedDataIndex}
          onChange={handleDataIndexChange}
          style={{margin: 5}}
          >
          <option value={-1}>Latest</option>
          { props.data.map((value, index) => (
            <option key={index} value={index}>{value.name}</option> 
            ))}
        </HTMLSelect>
        }
      </H5>
      { showContent &&
        <div>
          <H6>{props.info.description}</H6>
          {props.children}
          <br />
          <RequestDataPanel
            paneProps={props.paneProps}
            data={props.data}
            selectedDataRowIndex={selectedDataIndex}
            />
        </div>
      }
    </Card>
  );
}


