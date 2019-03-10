import React, { PropTypes, Component } from "react";
import OptionField from './OptionField';
import newId  from '../../../util/idGenerator';

class MultipleChoiceEditor extends Component {
  constructor(props) {
    super(props);
    this.inputs = {};
  }

  update() {
    this.props.updateQuestion(this.props.id, {
      title: this.title_node.value
    });
  }

  render() {
    const { id, title, options } = this.props;
    return (
        <div>
          <form>
            <div className="form-group">
              <label>Field Label</label>
              <input type="text" className="form-control input-sm"
                     value={title}
                     ref={node => {this.title_node = node}}
                     onChange={() => this.update()}/>
            </div>
            <div className="form-group">
              <label>Options</label>
              {options.map((option, index) => {
                return <OptionField
                    canRemove={index !== 0}
                    key={option.id}
                    content={option.content}
                    ref={(input) => { this.inputs[option.id] = input }}
                    onChange={(e) => {
                      this.props.updateQuestion(id, {
                        options: [
                          ...options.slice(0, index),
                          {
                            id: option.id,
                            content: e.target.value
                          },
                          ...options.slice(index + 1)
                        ]
                      })
                    }}
                    onClone={() => {
                      this.props.updateQuestion(id, {
                        options: [
                          ...options.slice(0, index + 1),
                          {id: newId(), content: option.content},
                          ...options.slice(index + 1)]
                      })
                    }}
                    onRemove={() => {
                      this.props.updateQuestion(id, {
                        options: [
                          ...options.slice(0, index),
                          ...options.slice(index + 1)]
                      })
                    }}/>
              })}
            </div>
          </form>
        </div>
    )
  }
}

MultipleChoiceEditor.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  updateQuestion: PropTypes.func.isRequired
};

export default MultipleChoiceEditor;
